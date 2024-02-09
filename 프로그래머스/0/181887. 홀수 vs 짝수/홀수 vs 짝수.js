const solution = (numList) => {
    let sumOfEven = 0;
    const sumOfOdd = numList.reduce((acc, val, idx) => {
        if (idx % 2 === 0) {
            return acc + val;
        } else {
            sumOfEven += val;
            return acc;
        }
    }, 0);
    return (sumOfEven > sumOfOdd) ? sumOfEven : sumOfOdd;
}