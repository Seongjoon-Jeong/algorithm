const solution = (code) => {
    let answer = "";
    let mode = false; // true = 1, false = 0
    let idx = 0;
    
    for(let char of code) {
        if(mode) { // 1
            if(char === "1") {
                mode = false;
            } else if(idx % 2 === 1) {
                answer += char;
            }
        } else { // 0
            if(char === "1") {
                mode = true;
            } else if(idx % 2 === 0) {
                answer += char;
            }
        }
        idx++;
    }
    
    if (answer === "") answer = "EMPTY";
    return answer;
}