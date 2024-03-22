const solution = (num, k) => {
    return [...num.toString()].reduce((acc, v, i, arr) => {
        if (Number(v) === k) {
            arr.splice(1);
            return i + 1;
        }
        return acc;
    }, -1);
}