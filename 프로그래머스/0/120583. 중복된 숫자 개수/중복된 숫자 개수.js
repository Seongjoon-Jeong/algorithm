const solution = (arr, n) => {
    return arr.reduce((acc, v) => v === n ? acc + 1 : acc, 0);
}