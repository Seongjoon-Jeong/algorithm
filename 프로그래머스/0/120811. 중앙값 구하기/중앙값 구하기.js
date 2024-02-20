const solution = (arr) => {
    return arr.sort((a, b) => a - b).at(arr.length / 2);
}