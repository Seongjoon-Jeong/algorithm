const solution = (str, n) => {
    let answer = [];
    for (let i = 0; i < str.length; i = i + n) {
        answer.push(str.slice(i, i + n));
    }
    return answer;
}