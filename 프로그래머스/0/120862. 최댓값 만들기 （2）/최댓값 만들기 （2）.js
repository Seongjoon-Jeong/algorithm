const solution = (numbers) => {
    numbers.sort((a, b) => b - a);
    return numbers.reduce((acc, v, i) => {
        if (i === 0) return acc;
        return acc < v * numbers[i - 1] ? v * numbers[i - 1] : acc;
    }, -100000000);
}