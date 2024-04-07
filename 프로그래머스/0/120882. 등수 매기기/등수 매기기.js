const solution = (score) => {
    let answer = new Array(score.length).fill(0);
    let prevScore = 0;
    let rankCount = 0;
    let acc = 0;
    
    let newScore = score.map((v, i) => [(v[0] + v[1])/2, i]); 
    newScore.sort((a, b) => b[0] - a[0]);
    newScore = newScore.map((v) => {
        if (v[0] === prevScore) {
            acc++;
        } else {
            rankCount = rankCount + 1 + acc;
            acc = 0;
        }
        prevScore = v[0];
        return [rankCount, v[1]];
    });
    
    newScore.forEach((v) => {
        answer[v[1]] = v[0];
    });
    return answer;
}