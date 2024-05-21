//================import/export==================
const app = require("./app");
console.log("import/export x=", app.x);
console.log("import/export function=", app.y());

//==================simple operation===================
var a = 50;
var b = 40;
var c = a+b;
console.log(c);

//===============array with filter search======================
var arr = [1,2,3,4,5,3,6];
console.log(arr);
arr.filter((item) => {
    console.log(item);
});


//========================filter search==========================
const result = arr.filter((item) => {
    return item===3;
});
console.log(result);


//====================file system=========================
const fs = require('fs');
fs.writeFileSync("hello.txt", "Hello World");

const fs = require('fs').writeFileSync;
fs("hello.txt", "Hello World");

fs.unlinkSync(filename);  // to remove file


//=======================create file from input======================
const fs = require('fs');
const input = process.argv;  // get input from terminal
fs.writeFileSync(input[2], input[3]);

//from terminal type - node index.js hello.txt 'content'


//====================create file in folder using path=========================
const fs = require('fs');
const path = require('path');
// const dirPath1 = path.join(__dirname);  // return the current directory path
// const dirPath2 = path.join(__filename);  // return the current file path

const dirPath = path.join(__dirname, 'files');  // folder/directory inside files named folder

//create multiple file
for(i=0; i<5; i++) {
    fs.writeFileSync(dirPath + "/hello"+ i +".txt", 'content data'); 
    // fs.writeFileSync(`/hello${i}.txt`, 'content data');  // both are same
}

// read directory/folder

fs.readdir(dirPath, (error, list) => {
    console.log(list);    // return array

    list.forEach((item) => {
        console.log(item); 
    });

});