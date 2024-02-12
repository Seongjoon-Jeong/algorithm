const solution = (rnyStr) => {
    let answer = [];
    rnyStr.split('').forEach((val, idx) => {
       if (val === 'm') {
           answer.push("rn");
       } else {
           answer.push(val);
       }
    });
    return answer.join('');
}