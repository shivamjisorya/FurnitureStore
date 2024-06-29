
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                    // welcome to nodejs
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// Welcome to Node.js v20.10.0.
// Type ".help" for more information.
// > .break   Sometimes you get stuck, this gets you out
// .clear   Alias for .break
// .exit    Exit the REPL
// .help    Print this help message
// .load    Load JS from a file into the REPL session
// .save    Save all evaluated commands in this REPL session to a file

// Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL



// REPL
// 1: js Expression
// 2: use variables
// 3: multiline Code 
// 4: use (_) to get the last result
// 5: we can use editor mode





// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                    // normal code no speacial
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log("hello world");

// const a=(x,y)=>{
//     return x+y;
// }
// console.log(a(3,4));


// const fullname = function(sname,lname){
// console.log(sname + lname);
// }
// console.log(fullname("shivam"," jisorya"));

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                    // import export concept linked with app.js
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


// // import export
// var add = require('./app');
// console.log(add(7,4));


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//                                      CRUD operation by thapa technical (yt)
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// const fs = require("fs");

// fs.writeFileSync("infile.txt" ,"hello bhaisahab");

// fs.writeFileSync("infile.txt" ,"hi madam");

// fs.appendFileSync("infile.txt" , "how are you shivam this statement is added by fs.appendFileSync");

// const buf_data =fs.readFileSync("infile.txt");
// console.log(buf_data);


// output
// <Buffer 68 69 20 6d 61 64 61 6d 68 6f 77 20 61 72 65 20 79 6f 75 20 73 68 69 76 61 6d 20 74 68 69 73
//  20 73 74 61 74 65 6d 65 6e 74 20 69 73 20 61 64 64 65 64 ... 21 more bytes>

// nodejs include an additional data type named buffer
// (not availaible in browser's javascript)
// buffer is mainly used to store binary data
// while reading from a file or receving packets over the network


// ab isko change krna hai normal language to uske liye

// org_data = buf_data.toString();
// console.log(org_data);


// to rename the file 

// fs.renameSync("infile.txt" , "readwrite.txt");


// // trying html tags if they work in res.write in nodejs
// var http=require('http');
// http.createServer(function(req,res)
// {
//     res.write('<h1>Hello from node js server</h1>');
//     res.write('<h2>Hello VSIT</h2>');
//     res.write('<h3>Hello VSIT</h3>');
//     res.write('<a href=""><h2>Hello from node js server2<h2></a>');
//     res.write('<input type="text"/><button>click</button>');
//     res.end();
//  }).listen(1921)

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                    // VSIT CODE ON CRUD OPERATIONS
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%making a file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// var fs = require('fs');

// fs.appendFile('demo.html', ' this is a html sample file.', function (err) {
//     if (err) throw err;
//     console.log('Updated!');
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%opening a file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// fs.open('demo.html', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('hogya!');
// });


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%opening a file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// fs.writeFile('demo.html', 'this is a html page', function (err) {
//     if (err) throw err;
//     console.log('hogya!');
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%deleting the file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// fs.unlink('demo.html', function (err) {
//     if (err) throw err;
//     console.log('deleted file check in menu');
//   });

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%renaming the file%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



// fs.rename('demo.html', 'samplehtmlfile.html', function (err) {
//   if (err) throw err;
//   console.log('File Renamed!');
// });


// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                        // challenge BY THAPA TECHNICAL
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



var fs= require("fs");

// fs.mkdirSync("thapa");

// fs.writeFileSync("./thapa/bio.txt" , "hello this is a sample site challlenged by thapa technical");

// fs.appendFileSync("./thapa/bio.txt" , "this is the more text added to this particular page");

// const buf_data = fs.readFileSync("./thapa/bio.txt");

// console.log(buf_data);

// %%%%%%%%%%output%%%%%%%%%%%%%%%
// <Buffer 68 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 61 20 73 61 6d 70 6c 65 20 73 69 74 65 20
//  63 68 61 6c 6c 6c 65 6e 67 65 64 20 62 79 20 74 68 61 70 61 20 74 ... 59 more bytes>

// const data_needed =buf_data.toString();
// console.log(data_needed);


// %%%%%%%%%%output%%%%%%%%%%%%%%%
// hello this is a sample site challlenged by thapa technicalthis is the more text added to this particular page

// fs.renameSync("./thapa/bio.txt" , "./thapa/mybio.txt");

// fs.unlinkSync("./thapa/mybio.txt");

// fs.rmdirSync("./thapa");
