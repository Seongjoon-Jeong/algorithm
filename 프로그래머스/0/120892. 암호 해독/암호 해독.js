const solution = (cipher, code) => {
    return [...cipher].filter((v, i) => {
        return (i + 1) % code === 0 ? true : false;
    }).join('');
}