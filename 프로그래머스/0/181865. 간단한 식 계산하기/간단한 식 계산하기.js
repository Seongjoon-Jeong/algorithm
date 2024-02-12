const solution = (binomial) => {
    binomial = binomial.split(' ');
    let answer = 0;
    if (binomial[1] === '+') {
        answer = Number(binomial[0]) + Number(binomial[2]);
    } else if (binomial[1] === '-') {
        answer = binomial[0] - binomial[2];
    } else {
        answer = binomial[0] * binomial[2];
    }
    
    return answer;
}