const solution = (a, b, c, d) => {
    let answer = 0;
    let p = 0, q = 0, r = 0;
    const diceList = [a, b, c, d];
    diceList.sort(); // 오름차순 정렬
    
    let map = new Map();
    diceList.forEach((val) => {
       if (map.has(val)) {
           map.set(val, map.get(val) + 1);
       } else {
           map.set(val, 1);
       }
    });
        
    if (a === b && b === c && c === d) {
        answer = 1111 * a;
    } else if (map.size === 4) {
        answer = Math.min(...diceList);
    } else {
        if (map.size === 3) {
            for (let [key, value] of map) {
                if (value === 2) {
                    p = key;
                } else if(q === 0) {
                    q = key;
                } else {
                    r = key;
                }
            }
            answer = q * r;
        } else if (map.size === 2 && map.get(a) !== 2) {
            for (let [key, value] of map) {
                if (value === 3) {
                    p = key;
                } else {
                    q = key;
                }
            }
            answer = (10 * p + q) * (10 * p + q);
        } else {
            for (let [key, value] of map) {
                if (p === 0) {
                    p = key;
                } else {
                    q = key;
                }
            }
            answer = (p + q) * Math.abs(p - q);
        }
    }
    return answer;
}