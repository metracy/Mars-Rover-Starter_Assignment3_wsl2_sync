class Message {
   constructor(name, commands) {
     if (!name) {
       throw new Error('Name required.');
     }
     // set object names from index 0 and index 1
     this.name = name;
     this.commands = commands;
   }
 }

module.exports = Message;