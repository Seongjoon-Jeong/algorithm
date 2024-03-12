const solution = (n) => {
    let answer = [];
    for (let i = 2; i <= n; i++) {
        if (n % i === 0) {
            let flag = true;
            
            for (let j = i - 1; j > 1; j--) {
                if (i % j === 0) flag = false;
            }
            
            if (flag) answer.push(i);
        }
    }
    return answer;
}