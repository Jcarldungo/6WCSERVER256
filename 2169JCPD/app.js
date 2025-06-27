var myLogModule = require('./Prelims/utility/log.js');
myLogModule.warning('Warning node not found..');
myLogModule.error("Error: Node encountered an error.. ");
myLogModule.info("Node is running...");

var msg =require("./PRELIMS/utility/message.js");
console.log(msg);

var person = require("./PRELIMS/utility/data.js");
console.log(person.firstName + ' ' + person.lastName);

var msg = require("./PRELIMS/utility/log.js");
msg('Hello World');