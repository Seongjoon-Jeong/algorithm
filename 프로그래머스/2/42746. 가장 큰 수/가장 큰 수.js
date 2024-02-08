const solution = (numbers) => {
    const answer = numbers.map((val) => {
            return val.toString();
        }).sort((a,b) => {
            return (b + a) - (a + b);
        }).join('');
    
    return answer[0] === '0' ? '0' : answer;
}