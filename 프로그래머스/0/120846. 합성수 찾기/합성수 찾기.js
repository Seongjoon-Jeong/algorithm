const solution = (n) => {
    let answer = 0;
    for (let i = 4; i <= n; i++) {
        let flag = false;
        
        for (let j = i - 1; j > 1; j--) {
            if (i % j === 0) {
                flag = true;
                break;
            }
        }
        
        if (flag) answer++;
    }
    return answer;
}