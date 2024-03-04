const solution = (str, letter) => {
    return [...str].filter(v => v === letter ? false : true).join('');
}