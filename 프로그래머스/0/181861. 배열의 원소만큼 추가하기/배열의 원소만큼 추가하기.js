const solution = (arr) => {
    let answer = [];
    arr.forEach((val) => {
        const target = new Array(val).fill(val);
        answer = [...answer, ...target];
    });
    return answer;
}