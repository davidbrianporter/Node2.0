console.log('Starting notes.js');

// set multiple properties(ojects) on the exports object
// Arrow functions do not bind "THIS" keyword or the "ARGUEMENTS ARRAY""
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
};

module.exports.add = (a, b) => {
    return a + b;
}