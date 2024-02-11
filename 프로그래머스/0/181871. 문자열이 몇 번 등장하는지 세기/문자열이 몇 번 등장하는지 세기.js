const solution = (str, pat) => {
    let answer = 0;
    for (let i = 0; i <= str.length - pat.length; i++) {
        if (str.slice(i, i + pat.length) === pat) answer++;
    }
    return answer;
}