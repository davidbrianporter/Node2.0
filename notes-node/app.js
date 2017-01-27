console.log('Starting app.');

// nodejs.org/api
// view modules in nodejs

const fs = require('fs');
const os = require('os');
//  ./ === current directory
const notes = require('./notes.js');

var res = notes.addNote();
console.log(res);
var ad = notes.add(2, 2);
console.log('Result:', notes.add(9, -2));
// var user = os.userInfo();

// // causes a warning in ver7
// // fs.appendFile('greetings.txt', 'Hello World');

// // future proof
// // use template strings
// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.`, function (err) {
//     if (err) {
//         console.log('Unable to write to file');
//     }
// });

// future proof 2
//fs.appendFileSync('greetings.txt', 'Hello world! opt 2');