const fs=require('fs');
//implement crud.js functions using node.jsfs module
fs.WriteFileSync('notes.txt', 'Hello Node.js');


// Create or overwrite a file with content
const data=fs.readFileSync('notes.txt')
console.log(data); // Read the content of the file
// update the file content



fs.appendFileSync('notes.txt', ' hello ece b');
 // Append content to the file
 
 fs.rmSync('notes.txt');// delete the file
 