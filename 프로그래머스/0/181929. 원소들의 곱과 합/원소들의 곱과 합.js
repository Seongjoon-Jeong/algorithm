const solution = (numList) => {
    let sum = 0, multiple = 1;
    
    numList.forEach((value) => {
        sum += value;
        multiple *= value;
    });
        
    return (multiple < (sum * sum)) ? 1 : 0;
}