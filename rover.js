class Rover {
   // easy part - just take in position and message and set default values
   constructor(position, message) {
      this.position = position;
      this.mode = 'NORMAL';
      this.generatorWatts = 110;
   }

   receiveMessage(message) {
      
   }
}

module.exports = Rover;