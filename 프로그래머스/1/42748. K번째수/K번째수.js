const solution = (arr, commands) => {
    let answer = [];
    commands.forEach(([i, j, k], idx) => {
        const tempArr = arr.slice(i - 1, j).sort((a, b) => a - b);
        answer.push(tempArr[k - 1]);
    });
    return answer;
}