const solution = (n) => {
    let answer = new Array(n).fill(new Array(n).fill(0));
    return answer.map((arr, i) => {
        return arr.map((_, j) => {
           return (i === j) ? 1 : 0;
        });
    });
}