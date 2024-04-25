#!/usr/bin/node
function add(a, b) {
    return a + b;
}

// Export the add function to make it visible from outside
module.exports.add = add;
