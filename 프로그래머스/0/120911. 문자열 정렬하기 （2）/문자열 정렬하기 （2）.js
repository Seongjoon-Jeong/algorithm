const solution = (str) => {
    str = str.toLowerCase();
    return [...str].sort().join('');
}