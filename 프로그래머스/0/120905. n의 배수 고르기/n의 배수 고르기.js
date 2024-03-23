const solution = (n, numList) => {
    return numList.filter((v) => v % n === 0 ? true : false);
}