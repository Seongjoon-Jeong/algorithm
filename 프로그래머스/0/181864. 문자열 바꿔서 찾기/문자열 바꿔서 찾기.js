const solution = (str, pat) => {
    str = str.split('').map(val => (val === 'A') ? 'B': 'A');
    return str.join('').includes(pat) ? 1 : 0;
}