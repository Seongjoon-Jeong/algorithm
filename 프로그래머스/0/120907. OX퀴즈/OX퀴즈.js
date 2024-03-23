const solution = (quiz) => {
    let answer = [];
    
    quiz.forEach((v, i) => {
        const [x, op, y, eq, z] = v.split(' ');
        let result = 'X';
        if (op === '+') {
            if (Number(z) === Number(x) + Number(y)) result = 'O';
        } else {
            if (Number(z) === Number(x) - Number(y)) result = 'O';
        }
        answer.push(result);
    });
    
    return answer;
}