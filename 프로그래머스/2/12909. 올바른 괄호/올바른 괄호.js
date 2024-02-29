const solution = (s) => {
    let stack = [];
    
    if (s[0] === ')') return false;
    
    for (let c of s) {
        if (c === '(') {
            stack.push(c);
        } else {
            stack.pop()
        }
    }

    return stack.length === 0 ? true : false;
}