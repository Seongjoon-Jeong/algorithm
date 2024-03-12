const solution = (str) => {
    const numCharList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    return [...str].filter((v) => {
        return numCharList.includes(v) ? true : false;
    }).reduce((acc, v) => acc + Number(v), 0);
}