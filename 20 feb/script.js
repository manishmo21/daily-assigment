const { listFiles, createDirectory, readFileContent, writeToFile } = require('./fileSystemModule');


listFiles(__dirname);


createDirectory('newDirectory');
readFileContent(__filename); 

const content = "This is the new content.";
writeToFile('newFile.txt', content);
