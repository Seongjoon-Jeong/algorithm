const solution = (strArr) => {
    strArr.forEach((val, i) => {
        strArr[i] = (i % 2 === 0) ? val.toLowerCase() : val.toUpperCase();
    });
    return strArr;
}