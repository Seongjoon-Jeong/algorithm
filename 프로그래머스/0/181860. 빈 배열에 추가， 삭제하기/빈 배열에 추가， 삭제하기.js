const solution = (arr, flag) => {
    let answer = [];
    arr.forEach((val, i) => {
       if (flag[i]) {
           const target = new Array(val * 2).fill(val);
           answer = [...answer, ...target];
       } else {
           answer = answer.slice(0, answer.length - val);
       }
    });
    return answer;
}