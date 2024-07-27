class Message {
   constructor(name, commands) {
    this.name = name;
    this.commands = commands;
     if (!name) {
       throw new Error('Name required.');
     }
     // pull from constructor
   }
 }

module.exports = Message;