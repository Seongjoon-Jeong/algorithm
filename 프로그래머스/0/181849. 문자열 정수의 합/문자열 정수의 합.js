const solution = (numStr) => {
    return [...numStr].reduce((acc, val) => Number(acc) + Number(val));
}