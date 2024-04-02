const solution = (sides) => {
    const maxNum = sides[0] >= sides[1] ? sides[0] : sides[1];
    const minNum = sides[0] < sides[1] ? sides[0] : sides[1];
    const largestNum = maxNum + minNum - 1;
    let count = 0;
    for (let i = 1; i <= maxNum; i++) {
        if ((i + minNum) > maxNum) count++;
    }
    
    return count + (largestNum - maxNum);
}