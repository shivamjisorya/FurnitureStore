
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
                                // using events for file opening
// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


var fs = require('fs');

var openFile = fs.createReadStream('./script.js');

/*Write to the console when the file is opened:*/
openFile.on('open', function () {
  console.log('The file is open and this written because of the event i applied');
});