const solution = (s) => {
    let answer = [];
    let map = new Map();
    
    [...s].forEach((v) => {
        if (map.has(v)) {
            map.set(v, map.get(v) + 1);
        } else {
            map.set(v, 1);
        }
    });
    
    for (let [k, v] of map) {
        if (v === 1) {
            answer.push(k);
        }
    }
    
    return answer.length === 0 ? '' : answer.sort().join('');
}