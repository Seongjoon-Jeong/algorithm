const solution = (str) => {
    let answer = str.split('x');
    answer = answer.map((val) => val.length);
    return answer;
}