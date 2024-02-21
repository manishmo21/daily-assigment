const fs = require('fs').promises;

// Function 1: List Files
async function listFiles(directoryPath) {
  try {
    const files = await fs.readdir(directoryPath);
    console.log("Files in directory:");
    files.forEach(file => console.log(file));
  } catch (err) {
    console.error("Error listing files:", err);
  }
}

// Function 2: Create Directory
async function createDirectory(directoryName) {
  try {
    await fs.mkdir(directoryName);
    console.log(`Directory '${directoryName}' created successfully.`);
  } catch (err) {
    console.error("Error creating directory:", err);
  }
}

// Function 3: Read File Content
async function readFileContent(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    console.log("File content:");
    console.log(content);
  } catch (err) {
    console.error("Error reading file content:", err);
  }
}

// Function 4: Write to File
async function writeToFile(filePath, content) {
  try {
    await fs.writeFile(filePath, content);
    console.log("Content written to file successfully.");
  } catch (err) {
    console.error("Error writing to file:", err);
  }
}

module.exports = {
  listFiles,
  createDirectory,
  readFileContent,
  writeToFile
};
