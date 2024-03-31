const solution = (str) => {
    let arr = [];
    [...str].forEach((v) => {
        if (Number(v) || v === '0') {
            arr.push(v);
        } else {
            arr.push(' ');
        }
    });
        
    return arr.join('').split(' ').reduce((acc, v) => {
        return Number(v) ? acc + Number(v) : acc;
    }, 0)
}