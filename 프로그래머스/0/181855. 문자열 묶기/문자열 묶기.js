const solution = (strArr) => {
    let map = new Map();
    let answer = 0;
    
    strArr.forEach((val) => {
        if (map.has(val.length)) {
            map.set(val.length, map.get(val.length) + 1);
        } else {
            map.set(val.length, 1);
        }
    });
    
    for (let [key, val] of map) {
        if (val > answer) answer = val;
    }
    return answer;
}