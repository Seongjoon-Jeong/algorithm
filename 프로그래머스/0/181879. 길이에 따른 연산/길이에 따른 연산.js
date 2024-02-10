const solution = (numList) => {
    let answer = 0;
    numList.forEach((val, i) => {
        if (numList.length <= 10) {
            if (i === 0) answer = 1;
            answer *= val;
        } else {
            answer += val;
        }
    });
    
    return answer;
}