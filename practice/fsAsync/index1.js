const fs = require("fs");

// fs.writeFile("read.txt" ,"hello world" ,(err) => {
// console.log("completed");
// console.log(err);
// } );


// we pass them a function as an arguement --callback --
// that gets called when tje task completed
// the callback has an arguement that tells you whether
//  the operation is completed or not
// now we need to understand what to do with the fs.writeFile
// has completed ( even if its's nothing) , and start
// checking for eroors

// fs.appendFile("index1.js" , "this is file appended without sync use" , (err) => {
//     console.log("task completed");
//     console.log(err);
// });

// &&&&&&&&output&&&&&&&&&&
// this is file appended without sync use


fs.readFile("read.txt" , "UTF-8" , (err , data)=> {
    console.log(data);
    console.log(err);

});