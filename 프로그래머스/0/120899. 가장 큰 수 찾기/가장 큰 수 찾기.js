const solution = (arr) => {
    const num = Math.max(...arr);
    const idx = arr.indexOf(num);
    return [num, idx];
}