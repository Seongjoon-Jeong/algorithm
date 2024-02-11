const solution = (str, pat) => {
    return str.slice(0, str.lastIndexOf(pat) + pat.length);
}