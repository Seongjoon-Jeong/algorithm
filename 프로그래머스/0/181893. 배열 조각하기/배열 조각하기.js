const solution = (arr, query) => {
    query.forEach((val, idx) => {
        if (idx % 2 === 0) {
            arr = arr.splice(0, val + 1);
        } else {
            arr = arr.splice(val);
        }
    });
    return arr;
}