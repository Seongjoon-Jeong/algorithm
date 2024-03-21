const solution = (str) => {
    let operator = 1;
    return str.split(' ').reduce((acc, v, i) => {
        if (i === 0) {
            return acc + Number(v);
        } else if (v === '+') {
            operator = 1;
        } else if (v === '-') {
            operator = -1;
        } else {
            return acc + (operator * Number(v));
        }
        return acc;
    }, 0);
}