const solution = (numbers, k) => {
    const resultIdx = 2 * k - 1;
    return numbers.length > resultIdx ? numbers[resultIdx - 1] : resultIdx % numbers.length === 0 ? numbers[numbers.length - 1] : numbers[resultIdx % numbers.length - 1];
}

