const solution = (order) => {
    return [...order.toString()].reduce((acc, v) => {
        return ['3', '6', '9'].includes(v) ? acc + 1 : acc;
    }, 0);
}