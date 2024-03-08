const solution = (numList, n) => {
    let answer = [];
    let tempList = [];
    let count = 1;
    
    numList.forEach((v) => {
        tempList.push(v);
        if (count === n) {
            answer.push(tempList);
            tempList = [];
            count = 1;
        } else {
            count++;
        }
    });
    return answer;
}