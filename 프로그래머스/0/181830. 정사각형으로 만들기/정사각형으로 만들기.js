const solution = (arr) => {
    let x = arr.length, y = arr[0].length;
    if (x > y) {
        arr.forEach(v => {
            for (let i = 0; i < x - y; i++) {
                v.push(0);
            }
        });
    } else {
        for (let i = 0; i < y - x; i++) {
            arr.push(new Array(y).fill(0));
        }
    }
    return arr;
}