#!/usr/bin/node
const numArgs = process.argv.length - 2; // Subtracting 2 to exclude 'node' and the script name

// Print message based on the number of arguments
if (numArgs === 0) {
    console.log("No argument");
} else if (numArgs === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
