const solution = (str) => {
    return [...str].map((v) => (v < 'l') ? 'l' : v).join('');
}