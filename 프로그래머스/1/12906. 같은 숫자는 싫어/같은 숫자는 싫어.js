const solution = (arr) => {
    let answer = [];

    arr.forEach((v, i) => {
        if (i === 0) {
            answer.push(v);
        } else if (answer[answer.length - 1] !== v) {
            answer.push(v);
        }
    });
    
    return answer;
}