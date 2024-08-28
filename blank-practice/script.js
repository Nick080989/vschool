// Function to capitalize and lowercase a string
function capitalizeAndLowercase(str) {
    return str.toUpperCase() + str.toLowerCase();
}

// Function to find the middle index
function findMiddleIndex(str) {
    return Math.floor(str.length / 2);
}

// Function to return the first half of a string
function returnFirstHalf(str) {
    return str.slice(0, findMiddleIndex(str));
}

// Function to capitalize first half and lowercase second half
function capitalizeAndLowercaseHalves(str) {
    const middleIndex = findMiddleIndex(str);
    return str.slice(0, middleIndex).toUpperCase() + str.slice(middleIndex).toLowerCase();
}

// Optional: Function to capitalize characters after spaces
function capitalizeAfterSpaces(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

// Test the functions
console.log(capitalizeAndLowercase("HelLo")); // => "HELLOhello"
console.log(findMiddleIndex("Hello")); // => 2

