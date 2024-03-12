const solution = (str) => {
    const numCharList = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9'];
    return [...str].filter((v) => {
        return numCharList.includes(v) ? true : false;
    }).map((v) => Number(v)).sort((a, b) => a - b);
}