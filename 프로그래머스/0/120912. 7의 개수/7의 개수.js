const solution = (arr) => {
    return arr.reduce((acc, v) => {
        return acc + [...v.toString()].filter((v) => v === "7").length;
    }, 0);
}