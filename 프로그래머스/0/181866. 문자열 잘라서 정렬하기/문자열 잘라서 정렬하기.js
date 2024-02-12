const solution = (str) => {
    return str.split('x').filter(val => val.length > 0).sort();
}