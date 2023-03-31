const getMajorityNumber = (numbers = []) => {
  const numbersCounts = {};
  const halfOfNumbers = Math.floor(numbers.length / 2);

  for (let i = 0; i < numbers.length; i++) {
    if (!numbersCounts[numbers[i]]) numbersCounts[numbers[i]] = 1;
    else numbersCounts[numbers[i]]++;

    if (numbersCounts[numbers[i]] > halfOfNumbers) return numbers[i];
  }
};
