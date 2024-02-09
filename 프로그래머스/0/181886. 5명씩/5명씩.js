const solution = (names) => {
    let answer = [];
    names.forEach((val, idx) => {
        if (idx % 5 === 0) {
            answer.push(val); 
        }
    });
    return answer;
}