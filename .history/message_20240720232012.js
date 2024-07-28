class Message {
   constructor(name, commands) {
     if (!name) {
       throw new Error('Name required.');
     }
     // pull from constructor
     this.name = name;
     this.commands = commands;
   }
 }

module.exports = Message;