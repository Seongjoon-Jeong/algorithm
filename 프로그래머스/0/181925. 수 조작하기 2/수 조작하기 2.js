const solution = (numLog) => {
    let answer = "";
    const maxLength = 100000;
    
    numLog.forEach((value, idx) => {
        const diff = (idx === numLog.length) ? "" : numLog[idx + 1] - value;
        switch (diff) {
            case 1:
               answer += "w"
               break;
            case 10:
               answer += "d"
               break;
            case -1:
               answer += "s"
               break;
            case -10:
               answer += "a"
               break;
            default: break;
        }
    });
    return answer;
}