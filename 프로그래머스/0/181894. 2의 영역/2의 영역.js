const solution = (arr) => {
    let answer = [];
    let pushTempArr = false;
    let tempArr = [];
    
    arr.forEach((val) => {
        if (val === 2 && answer.length === 0) { // 최초의 2가 출현한 경우
            answer.push(val);
        } else if (val === 2) { // 2번째 이상의 2가 출현한 경우
            answer = [...answer, ...tempArr, 2];
            tempArr = [];
        } else if (answer.length !== 0) {
            tempArr.push(val);
        }
    });
    
    if (answer.length === 0) answer.push(-1);
    return answer;
}

// const solution = (arr) => {
//     let answer = [];
//     let pushElement = false;
//     let tempArr = [];
//     let countAppearenceOfTwo = 0;
    
//     arr.forEach((val) => {
//         if (val === 2 && pushElement === false) {
//             pushElement = true;
//             if (tempArr.length !== 0) {
//                 answer = [...answer, ...tempArr];
//                 tempArr = [];
//                 pushElement = false;
//             }
//             answer.push(val);
//             countAppearenceOfTwo++;
//         } else if (val === 2) {
//             answer.push(val);
//             pushElement = false;
//             countAppearenceOfTwo++;
//         } else if (pushElement) {
//             answer.push(val);
//         } else if (answer.length !== 0) {
//             tempArr.push(val);
//         }
//     });
    
//     if (answer.length === 0) answer.push(-1);
//     if (countAppearenceOfTwo === 1) answer = [2];
//     return answer;
// }