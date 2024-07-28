const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.
/*
Command	       |            Value sent with command	                       |            Updates to Rover object	  |  Result returned
MOVE	         |Number representing the position the rover should move to. |	                position	          |  {completed: true}
STATUS_CHECK	 |No values sent with this command.	                         |              No updates              |  {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} (Values for mode, generatorWatts, position will depend on the current state of the rover.)
MODE_CHANGE	   |String representing rover mode (see modes)	               |              mode	                  |  {completed: true} 
*/    
//# test 7 rover - “constructor sets position and default values for mode and generatorWatts”
describe('Rover class', function() {
  test('constructor sets position and default values for mode and generatorWatts', function() {
    let position = 98382;
    // need to instantiate an object from class Rover, the rover needs one position to instantiate
    let rover = new Rover(position);
    let watts = 110;
    expect(rover.position).toBe(position);
    expect(rover.mode).toBe('NORMAL');
    expect(rover.generatorWatts).toBe(watts);
  });

  /*receiveMessage(message)
message is a Message object
Returns an object containing at least two properties:
message: the name of the original Message object
results: an array of results. Each element in the array is an object that corresponds to one Command in message.commands.
Updates certain properties of the rover object
Details about how to respond to different commands are in the Command Types table.
  */
//# test 8 rover “response returned by receiveMessage contains the name of the message”
  test('response returned by receiveMessage contains the name of the message', function() {
    let position = 98382;
    let rover = new Rover(position);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let msg = 'Test message with two commands';
    let message = new Message(msg, commands);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe(msg);
  });

//# test 9 “response returned by receiveMessage includes two results if two commands are sent in the message”
  test('response returned by receiveMessage includes two results if two commands are sent in the message', function() {
    let position = 98382;
    let rover = new Rover(position);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let msg = 'Test message with two commands';
    let message = new Message(msg, commands);
    let response = rover.receiveMessage(message, commands);
    expect(response.results.length).toBe(commands.length);
  });


  //# test 10 rover “responds correctly to the status check command”
  test('responds correctly to the status check command', function() {
    let position = 98382;
    let rover = new Rover(position);
    let commands = [new Command('STATUS_CHECK')];
    let msg = 'Test message with two commands';
    let message = new Message(msg, commands);
    let response = rover.receiveMessage(message);
    console.log(response.results)
    expect(response.results['roverStatus']).toEqual([{"completed": true, "roverStatus": {"generatorWatts": 110, "mode": "NORMAL", "position": position}}]);
  });

  //# test 11 rover “responds correctly to the mode change command”

  test('responds correctly to the mode change command', function() {
    let position = 98382;
    let rover = new Rover(position);
    let command1 = [new Command('MODE_CHANGE', 'LOW_POWER')];
    let message1 = new Message('Lower the power to LOW_POWER', command1);
    let responseToLow = rover.receiveMessage(message1);
    expect(responseToLow.results[0].completed).toBe(true);
    expect(rover.mode).toEqual('LOW_POWER');
    console.log("Rover Mode after changing to LOW_POWER:", rover.mode);
    let commands2 = [new Command('MODE_CHANGE', 'NORMAL')];
    let message2 = new Message('Raise the power to NORMAL', commands2);
    let responseToNorm = rover.receiveMessage(message2);
    expect(responseToNorm.results[0].completed).toBe(true);
    expect(rover.mode).toEqual('NORMAL');
    console.log("Rover Mode after changing to NORMAL:", rover.mode);
  });

  //# test 12 rover “responds with a false completed value when attempting to move in LOW_POWER mode”

  test('responds with a false completed value when attempting to move in LOW_POWER mode', function() {
    let position = 98382;
    let newPosition = 1337;
    let rover = new Rover(position);
    rover.mode = 'LOW_POWER'; 

    let commands = [new Command('MOVE', newPosition)];
    let message = new Message(`Move to ${newPosition}`, commands);
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(false);
  });

//# test 13 “responds with the position for the move command”
// A MOVE command will update the rover's position with the position value in the command.
  
  test('responds with the position for the move command', function() {
    let position = 98382; 
    let newPosition = 99999;
    let commands = [new Command('MOVE', newPosition)];
    let message = new Message(`Move to new loc`, commands);
    let rover = new Rover(position, message);
    rover.mode = 'NORMAL';
    let response = rover.receiveMessage(message);
    expect(response.results[0].completed).toBe(true);
    expect(rover.position).toBe(newPosition);
  });
});



