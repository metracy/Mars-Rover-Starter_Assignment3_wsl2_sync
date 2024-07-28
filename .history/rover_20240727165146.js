class Rover {
// easy part - just take in position and message and set default values
   constructor(position, message) {
      this.position = position;
      this.mode = mode;
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
    let results = [];
    // iterate over content of message.commands
    for (let currentCommand of message.commands) {

/*
Command	      |            Value sent with command	                       |   Updates to Rover object |  Result returned
MOVE	        | Number representing the position the rover should move to. |   position	               |  {completed: true}
*/
      if (currentCommand.commandType == 'MOVE') {
         if (this.mode == 'NORMAL') {
             this.position = currentCommand.value;
             results.push({ completed: true });
         } else {
             results.push({ completed: false });
         }
     }
/* 
Command	      |            Value sent with command	             |   Updates to Rover object |  Result returned
STATUS_CHECK	| No values sent with this command.	               |   No updates              |  {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} (Values for mode, generatorWatts, position will depend on the current state of the rover.)
*/
      else if (currentCommand.commandType == 'STATUS_CHECK') {
        results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position
          }
        });
      }
 /* 
Command	      |            Value sent with command	           |   Updates to Rover object |  Result returned
MODE_CHANGE	  | String representing rover mode (see modes)	   |   mode	                   |  {completed: true} 
*/     
      else if (currentCommand.commandType == 'MODE_CHANGE') {
        this.mode = currentCommand.value;
        results.push({ completed: true });
      }

    }

    return {
      message: message.name,
      results: results
    };
  }
}




/*      
      // start at the beginning for
      let loop_index = 0;

      // an array of results. Each element in the array is an object that corresponds to one
      let results = [];

      // should work for iterating over object to grab commands.
      while (loop_index < message.commands.length ) {
         if (message.commands[loop_index].isArray())
         let command = message.commands[loop_index];
         if (command.commandType == 'MOVE') {

         }

         loop_index += 1;
      };
      return {
         message: message.name,
         results: results
      };

   }
}
*/
module.exports = Rover;