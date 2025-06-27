var myLogModule = require('./PRELIMS/utility/log.js');

myLogModule.warning('Warning node not configured..');
myLogModule.error('Error: Node encountered an error..');
myLogModule.info('Node running...');

var msg =require("./PRELIMS/utility/message.js");
console.log(msg);

var person = require("./PRELIMS/utility/data.js");
console.log(person.firstName + ' ' + person.lastName);

var msg = required ("./PRELIMS/utility/log.js");
msg("Hello World");