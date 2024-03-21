const solution = (s1, s2) => {
    let answer = 0;
    for (let c1 of s1) {
        for (let c2 of s2) {
            if (c1 === c2) answer++;
        }
    }
    return answer;
}