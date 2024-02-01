// Define a function called average which returns the average of a list of numbers.
// Define a function called median which returns the median of an array of numbers.
// Define a function called standardDev which returns the standard deviation of an array of numbers.

function averageOfArray(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}