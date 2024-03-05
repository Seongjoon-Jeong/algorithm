const solution = (hp) => {
    const ants = [5, 3, 1];
    let answer = 0;
    ants.forEach((v) => {
        answer += Math.floor(hp / v);
        hp = hp % v;
    });
    return answer;
}