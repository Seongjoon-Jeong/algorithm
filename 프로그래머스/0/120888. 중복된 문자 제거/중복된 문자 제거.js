const solution = (str) => {
    return [...str].filter((v, i) => str.slice(0, i).includes(v) ? false : true).join('');
}