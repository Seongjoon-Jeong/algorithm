const solution = (strList) => {
    let answer = [...strList];
    let index = 0;
    const flag = strList.reduce((acc, val, idx) => {
        if (val === 'l' || val === 'r') {
            index = idx;
            strList.splice(1);
            return val;
        } else {
            return acc;
        }
    }, "NONE");
    
    if (flag === 'l') {
        answer = answer.slice(0, index);
    } else if (flag === 'r') {
        answer = answer.slice(index + 1);
    } else {
        answer = [];
    }
    
    return answer;
}