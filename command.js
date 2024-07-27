class Command {
   constructor(commandType, value) {
     this.commandType = commandType;
     // equal to falsy if undefined
     if (!commandType) {
       throw Error("Command type required.");
     }
     this.value = value;
   }
 
 }
 
 module.exports = Command;