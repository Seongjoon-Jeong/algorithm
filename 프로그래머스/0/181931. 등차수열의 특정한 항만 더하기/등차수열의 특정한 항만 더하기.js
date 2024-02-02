const solution = (a, d, included) => {
    const answer = included.reduce((acc, value, idx) => {
        if(value) {
            return acc + a + (idx * d);
        } else {
            return acc;
        }
    }, 0);
    
    return answer;
}