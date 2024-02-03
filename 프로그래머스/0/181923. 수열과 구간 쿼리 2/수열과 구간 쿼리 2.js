const solution = (arr, queries) => {
    let answer = [];
    
    queries.forEach(([s, e, k]) => {
        const tempArr = arr.slice(s, e + 1); 
        
        const targetValue = tempArr.reduce((acc, value) => {
            if (value > k) {
                if (acc === -1) {
                    return value;
                } else {
                    return (value < acc) ? value : acc;
                }
            } else {
                return acc;
            }
        }, -1);
        
        
        answer.push(targetValue);
    });
    
    return answer;
}