const solution = (numList, n) => {
    const prefix = numList.filter((val, idx) => idx >= n);
    const suffix = numList.filter((val, idx) => idx < n);
    return [...prefix, ...suffix];
}