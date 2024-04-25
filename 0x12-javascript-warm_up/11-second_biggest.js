#!/usr/bin/node
const integers = process.argv.slice(2).map(Number).filter((num, index, self) => self.indexOf(num) === index);

// Sort the integers in descending order
const sortedIntegers = integers.sort((a, b) => b - a);

// If no arguments passed or only one argument passed, print 0
if (sortedIntegers.length < 2) {
    console.log(0);
} else {
    // Print the second biggest integer
    console.log(sortedIntegers[1]);
}
