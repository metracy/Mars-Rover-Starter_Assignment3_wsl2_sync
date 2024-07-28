class Message {
   constructor(name, commands) {
    this.name = name;
     if (!name) {
       throw new Error('Name required.');
     }
     // pull from constructor
     this.commands = commands;
   }
 }

module.exports = Message;