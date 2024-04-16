const solution = (a, b, k) => {
    let answer = '';
    for (let i = a; i <= b; i++) {
        answer += i.toString();
    }
    
    return [...answer].filter((v) => v === k.toString() ? true : false).length;
}