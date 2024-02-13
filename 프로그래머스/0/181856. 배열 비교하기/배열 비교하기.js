const solution = (arr1, arr2) => {
    let answer = 0;
    const sumOfArr1 = arr1.reduce((acc, val) => acc + val);
    const sumOfArr2 = arr2.reduce((acc, val) => acc + val);
    
    if (arr1.length > arr2.length) {
        answer = 1;
    } else if (arr1.length === arr2.length) {
        if (sumOfArr1 > sumOfArr2) {
            answer = 1;
        } else if (sumOfArr1 === sumOfArr2) {
            answer = 0;
        } else {
            answer = -1;
        }
    } else {
        answer = -1;
    }
    
    return answer;
}