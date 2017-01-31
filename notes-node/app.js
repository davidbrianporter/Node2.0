console.log('Starting app.');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];
console.log('Command', command);

if (command === 'add') {
    console.log('adding new note');
} else if (command === 'list') {
    console.log('listing all notes');
} else if (command ==='read') {
    console.log('reading all notes');
} else if (command === 'remove') {
    console.log('remove note');
} else {
    console.log('Command not recognized');
}