const solution = (nStr) => {
    let index = 0;
    if (nStr[0] !== '0') return nStr;
    
    for (let i = 0; i < nStr.length; i++) {
        if (nStr[i] !== '0') {
            index = i;
            break;
        }
    }
    return nStr.slice(index);
}