const solution = (str) => {
    let answer = str.split('');
    answer.forEach((val, i) => {
        if (val === 'a') {
            answer[i] = 'A';
        } else if (val === val.toUpperCase() && val !== 'A') {
            answer[i] = val.toLowerCase();
        }
    });
    return answer.join('');
}