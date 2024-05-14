#!/usr/bin/node
if (process.argv[2] !== undefined && process.argv[3] !== undefined) {
    // Print the arguments in the specified format
    console.log(process.argv[2] + " is " + process.argv[3]);
} else {
    console.log("Insufficient arguments");
}
