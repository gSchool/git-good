const data = [24, 987, 23, 973, 32, 3462, 382, 53];

// Find the mean, median, and standard deviation of `data` and print them to the console.

function median(data) {
  const sortedNums = data.slice().sort((a, b) => a - b);
  const length = sortedNums.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 0) {
    const median = (sortedNums[middleIndex - 1] + sortedNums[middleIndex]) / 2;
    return median;
  } else {
    return sortedNums[middleIndex];
  }
}
