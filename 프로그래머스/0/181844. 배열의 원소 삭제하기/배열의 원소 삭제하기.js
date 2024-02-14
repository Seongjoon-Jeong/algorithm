const solution = (arr, deleteList) => {
    return arr.filter((v, i) => {
        return deleteList.includes(v) ? false : true;
    });
}