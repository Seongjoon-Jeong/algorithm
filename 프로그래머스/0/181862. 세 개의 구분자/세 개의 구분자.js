const solution = (str) => {
    let answer = [];
    let delimiter = '';
    let resultStr = '';
    
    str.split('').forEach((val, i) => {
         if (val === 'a' || val === 'b' || val === 'c') {
             if (resultStr !== '') {
                 answer.push(resultStr);
                 resultStr = '';
             }
             delimiter += val;
         } else if (delimiter === '' && i === 0) {
             resultStr += val;
         } else {
             resultStr += val;
             delimiter = '';
         }
    });
    
    if (resultStr.length !== 0) answer.push(resultStr);
    return (answer.length === 0) ? ["EMPTY"] : answer;
}