const solution = (str, alp) => {
    let answer = str.split('');
    answer.forEach((val, i) => {
        answer[i] = (val === alp) ? val.toUpperCase() : val;
    });
    return answer.join('');
}