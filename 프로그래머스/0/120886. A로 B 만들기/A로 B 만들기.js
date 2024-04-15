const solution = (before, after) => {
    let check = true;
    let map1 = new Map();
    let map2 = new Map();
    [...before].forEach((v, i) => {
        if (map1.has(v)) {
            map1.set(v, map1.get(v) + 1);
        } else {
            map1.set(v, 1);
        }
    });
    [...after].forEach((v, i) => {
        if (map2.has(v)) {
            map2.set(v, map2.get(v) + 1);
        } else {
            map2.set(v, 1);
        }
    });
    
    for (let [k, v] of map1) {
        if (map2.get(k) !== v) {
            check = false;
            break;
        }
    }

    return check ? 1 : 0;
}