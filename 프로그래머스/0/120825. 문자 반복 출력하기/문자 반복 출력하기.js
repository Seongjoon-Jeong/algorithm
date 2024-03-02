const solution = (str, n) => {
    return [...str].reduce((acc, v) => {
        return acc + Array(n).fill(v).join('');
    }, "");
}