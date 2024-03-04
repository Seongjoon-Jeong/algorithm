const solution = (emergency) => {
    let answer = Array(emergency.length).fill(0);
    emergency = emergency.map((v, i) => [v, i]).sort((a, b) => b[0] - a[0]);
    emergency.forEach((v, i) => {
        answer[v[1]] = i + 1;
    });
    return answer;
}