const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/fruit.txt`;


// create file
fs.writeFileSync(filePath, 'orange'); 


// read file
fs.readFile(filePath, 'utf8', (error, item) => {
    console.log(item);
});


// update file
fs.appendFile(filePath, ', apple', (error) => {
    if(!error) {
        console.log('file is updated');
    }
});


// delete file
fs.unlinkSync(filePath);


// rename file
fs.rename(filePath, `${dirPath}/apple.txt`, (error) => {
    if(!error) {
        console.log('file is renamed');
    }
});