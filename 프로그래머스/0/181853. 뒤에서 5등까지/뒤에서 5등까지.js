const solution = (numList) => {
    return numList.sort((a, b) => a - b).slice(0, 5);
}