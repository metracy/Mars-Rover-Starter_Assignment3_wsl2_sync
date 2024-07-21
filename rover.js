class Rover {
   // easy part - just take in position and message and set default values
   constructor(position, message) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }
/*
Command	      |            Value sent with command	                     |            Updates to Rover object	|  Result returned
MOVE	         |Number representing the position the rover should move to. |	                position	         |  {completed: true}
STATUS_CHECK	|No values sent with this command.	                        |              No updates              |  {completed: true, roverStatus: {mode: 'NORMAL', generatorWatts: 110, position: 87382098}} (Values for mode, generatorWatts, position will depend on the current state of the rover.)
MODE_CHANGE	   |String representing rover mode (see modes)	               |              mode	                  |  {completed: true} 
*/    

   receiveMessage(message) {
      // start at the beginning for
      let loop_index = 0;
      // an array of results. Each element in the array is an object that corresponds to one
      let results = [];

      while (loop_index < message.commands.length ) {
         
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

module.exports = Rover;