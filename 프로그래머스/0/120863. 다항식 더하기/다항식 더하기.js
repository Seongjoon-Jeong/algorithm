const solution = (poly) => {
    let valOfX = 0;
    let val = 0;
    let answer = "";
    
    poly = poly.split(' ').filter(v => v !== '+');
    poly.forEach((v) => {
        if (v[v.length - 1] === 'x') {
            if (v.length === 1) {
                valOfX += 1;
            } else {
                valOfX += Number(v.split('x')[0]);
            }
        } else {
            val += Number(v);
        }
    });
    
    if (valOfX === 0) {
    } else if (valOfX === 1) {
        answer += 'x';
    } else {
        answer += valOfX.toString() + 'x';
    }
    
    if (val === 0) {
    } else {
        if (answer === '') {
            answer += val.toString();
        } else {
            answer += ' + ' + val.toString();
        }
    }
    
    return answer;
}