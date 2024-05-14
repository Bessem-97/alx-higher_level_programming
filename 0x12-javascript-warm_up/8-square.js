#!/usr/bin/node
const size = parseInt(process.argv[2]);

// Check if the conversion is successful and print the result
if (!isNaN(size)) {
    // Loop to print each row of the square
    for (let i = 0; i < size; i++) {
        // Use string concatenation to repeat the character "X" for each row
        console.log("X".repeat(size));
    }
} else {
    console.log("Missing size");
}
