const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
/*
Test 4

This test description is “throws error if a name is NOT passed into the constructor as the first parameter”. Review the first test in command.spec.js for an example of how this test works.

Look at the code in command.js. Use that to help you write the Message class in message.js so that your test passes. Refer to the Message Class description above for more details.
*/
    // message test 4
    test("throws error if a name is NOT passed into the constructor as the first parameter", function() {
        let instantiateMessage = function() { new Message();};
        expect(instantiateMessage).toThrow(new Error('Name required.'));
    });
/*
Test 5

The description is “constructor sets name”. The test confirms that the constructor in the Message class correctly sets the name property in a new message object.
*/  

    // message test 5
    test("constructor sets name", function() {
        // use example message_text
        let message_text = 'Test message'
        // intantiate message with message_text.
        let message = new Message(message_text);
        // check if name property of object message was assigned correctly
        expect(message.name).toBe(message_text);
      });

/*
Test 6

The description reads “contains a commands array passed into the constructor as the 2nd argument”. This test confirms that the commands property of a new message object contains the data passed in from the Message(name, commands) call.

*/  
      test("contains a commands array passed into the constructor as the 2nd argument", function() {
        // using example from instruction sheet, instantiate commands array
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        // use example message_text
        let message_text = 'Test message with two commands'
        // intantiate message with message_text and array of commands.
        let message = new Message(message_text, commands);
        // check if command property of object message was assigned correctly
        expect(message.commands).toBe(commands);
      });
});
