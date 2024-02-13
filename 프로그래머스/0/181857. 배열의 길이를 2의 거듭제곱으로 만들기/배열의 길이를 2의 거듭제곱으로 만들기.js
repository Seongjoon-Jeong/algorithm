const solution = (arr) => {
    const len = arr.length;
    let zeroArr = [];
    
    for (let i = 0; i < 11; i++) {
        if (len === 2**i ) {
            return arr;
        } else if (len < 2**i) {
            zeroArr = new Array(2**i - len).fill(0);
            break;
        }
    }
    return [...arr, ...zeroArr];
}