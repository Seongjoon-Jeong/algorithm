const solution = (n) => {
    let answer = 0;
    let count = 0;
    
    while (count < n) {
        if (answer % 3 !== 0 && !answer.toString().includes('3')) {
            count++;
        }
        answer++;
    }
    return answer - 1;
}