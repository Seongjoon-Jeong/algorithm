const solution = (str, pat) => {
    str = str.toUpperCase();
    pat = pat.toUpperCase();
    return str.includes(pat) ? 1 : 0;
}