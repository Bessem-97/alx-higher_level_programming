// Define the callMeMoby function
function callMeMoby(x, theFunction) {
    // Loop x times and execute the given function
    for (let i = 0; i < x; i++) {
        theFunction();
    }
}

// Export the callMeMoby function to make it visible from outside
module.exports.callMeMoby = callMeMoby;
