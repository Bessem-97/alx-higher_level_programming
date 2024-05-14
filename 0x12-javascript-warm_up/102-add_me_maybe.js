#!/usr/bin/node
function incrementAndCall(number, theFunction) {
    // Increment the number
    number++;

    // Call the given function with the incremented number
    theFunction(number);
}

// Export the incrementAndCall function to make it visible from outside
module.exports.incrementAndCall = incrementAndCall;
