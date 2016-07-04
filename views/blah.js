var fs   = require('fs');
var pug = require('pug');

// Compile the template to a function string
var jsFunctionString = pug.compileFileClient('./cards.pug', {name: "cardTemplate"});

// Maybe you want to compile all of your templates to a templates.js file and serve it to the client
fs.writeFileSync("cardTemplate.js", jsFunctionString);