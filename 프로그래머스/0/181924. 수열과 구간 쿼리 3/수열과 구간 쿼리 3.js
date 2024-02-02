const solution = (arr, queries) => {
    const map = new Map();
    
    arr.forEach((value, idx) => {
        map.set(idx, value);
    });
    
    console.log(map);
    
    queries.forEach(([i, j]) => {
        const a = map.get(i);
        const b = map.get(j);
        map.set(i, b);
        map.set(j, a);
        // console.log(i, j, map.get(i), map.get(j)); //
    });
    
    let answer = [];
    map.forEach(value => answer.push(value));
    return answer;
}