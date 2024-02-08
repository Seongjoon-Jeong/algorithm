const solution = (numList, n) => {
    const answer = numList.filter((val, idx) => {
        return idx >= (n - 1);
    });
    return answer;
}