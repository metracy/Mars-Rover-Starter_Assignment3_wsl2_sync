/*
*Highlighted Comment
!Alert
?Query
TODO asdasd  
*/

let Command = require('../command.js');
//# NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//# However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


//# command test-1
describe("Command class", function() {

//* command throws error if command type is NOT passed into constructor as the first parameter

  test("throws error if command type is NOT passed into constructor as the first parameter", function () {
    // carrie's video rewritten easier to read
    let instantiateCommand = function() { new Command();};
    expect(instantiateCommand).toThrow(new Error('Command type required.'));
  });

//# command test-2

  test("constructor sets command type", function() {
    let modeCommand = 'MODE_CHANGE';
    let command = new Command(modeCommand);
    // check assigned correctly as 'MODE_CHANGE'
    expect(command.commandType).toBe(modeCommand);
  });

//# command test-3

  test("constructor sets a value passed in as the 2nd argument", function() {
    // use example from instruction task 2
    let value = 12000;
    let moveCommand = 'MOVE';
    let command = new Command(moveCommand, value);
    expect(command.value).toBe(value);
  });
});