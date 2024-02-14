const solution = (strList, ex) => {
    strList = strList.filter((v) => {
        return v.includes(ex) ? false : true;
    });
    return strList.join('');
}