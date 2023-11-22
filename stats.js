// Define a function called average which returns the average of a list of numbers.
// Define a function called median which returns the median of an array of numbers.

// Define a function called standardDev which returns the standard deviation of an array of numbers.
export const standardDev = (nums) => {
  // Do stuff here.
};

const getAverage = (nums) => {
  return nums.reduce((acc, val) => acc + val, 0) / nums.length;
};

export { getAverage };
