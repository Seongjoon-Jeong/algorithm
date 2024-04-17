const solution = (bin1, bin2) => {
    let answer = '';
    let long = bin1.length > bin2.length ? bin1 : bin2;
    let short = bin1.length <= bin2.length ? bin1 : bin2;
    short = new Array(long.length - short.length).fill(0).join('') + short;
        
    let overflow = false;
    for (let i = long.length - 1; i >= 0; i--) {
        let val = Number(long[i]) + Number(short[i]);
        if (overflow) {
            if (val === 2) {
                overflow = true;
                val = 1;
            } else if (val === 1) {
                overflow = true;
                val = 0;
            } else {
                overflow = false;
                val = 1;
            }
        } else {
            if (val === 2) {
                overflow = true;
                val = 0;
            }
        }
        answer = val.toString() + answer;
    }
    return overflow ? "1" + answer : answer;
}