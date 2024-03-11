const factorial = (num) => {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
}

const solution = (n) => {
    let answer = 0;
    for (let i = 10; i > 0; i--) {
        if (factorial(i) <= n) { 
            answer = i;
            break;
        }
    }
    return answer;
}