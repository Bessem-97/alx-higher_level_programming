#!/usr/bin/node
function add(a, b) {
    return a + b;
}

// Convert the arguments to integers
const num1 = parseInt(process.argv[2]);
const num2 = parseInt(process.argv[3]);

// Check if both arguments are valid integers
if (!isNaN(num1) && !isNaN(num2)) {
    // Call the add function and print the result
    console.log(add(num1, num2));
} else {
    console.log("Invalid input. Please provide two integers.");
}
