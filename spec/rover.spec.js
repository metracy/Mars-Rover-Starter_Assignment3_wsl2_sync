const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

// test 7 rover
describe('Rover class', function() {
  test('constructor sets position and default values for mode and generatorWatts', function() {
    let position = 98382;
    let rover = new Rover(position);
    let watts = 110
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
  // test 8 rover “response returned by receiveMessage contains the name of the message”
  test('response returned by receiveMessage contains the name of the message', function() {
    let position = 100
    let rover = new Rover(position);
    let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
    let msg = 'Test message with two commands';
    let message = new Message(msg, commands);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe(msg);
  });


});