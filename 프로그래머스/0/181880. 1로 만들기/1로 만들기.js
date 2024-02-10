const solution = (numList) => {
    let answer = 0;
    
    numList.forEach((val) => {
        let target = val;
        while (target > 1) {
            if (target % 2 === 0) {
                target /= 2;
            } else {
                target = (target - 1) / 2;
            }
            answer++;
        } 
    });
    
    return answer;
}