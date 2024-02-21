const solution = (arr) => {
    let answer = [0, 0];
    let moreThanTwo = false;
    let map = new Map();
    
    arr.forEach((v) => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });
    
    for (let [k, v] of map) {
        if (v > answer[1]) {
            answer = [k, v];
            moreThanTwo = false;
        } else if (k !== answer[0] && v === answer[1]) {
            moreThanTwo = true;
        }
    }
        
    return moreThanTwo ? -1 : answer[0];
}