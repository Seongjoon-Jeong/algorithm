const solution = (strArr) => {
    return strArr.filter((str) => {
        return (str.includes("ad")) ? false : true;
    });
}