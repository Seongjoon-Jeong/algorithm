const solution = (l, r) => {
    let answer = [];
    
    for (let i = l; i <= r; i++) {
        const tempStr = i.toString();
        const isCorrect = tempStr.split("").reduce((acc, val) => {
            if (val !== "0" && val !== "5") {
                return false;
            } else {
                return acc;
            }
        }, true);
        
        if (isCorrect) answer.push(i);
    }
    
    if (answer.length === 0) answer.push(-1);
    return answer;
}