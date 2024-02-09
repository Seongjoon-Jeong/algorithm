const solution = (numbers, n) => {
    let answer = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        const acc = answer + numbers[i];
        answer = acc;
        if (acc > n) break;
    }
    
    return answer;
}