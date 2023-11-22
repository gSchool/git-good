const data = [24, 987, 23, 973, 32, 3462, 382, 53];

// Find the mean, median, and standard deviation of `data` and print them to the console.

const getAverage = (nums) => {
    return nums.reduce((acc, val) => acc + val) / nums.length;
}

console.log(getAverage(data));

