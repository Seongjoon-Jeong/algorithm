const solution = (numList) => {
    return numList.reduce((acc, v) => {
        return (v % 2 === 0) ? [acc[0] + 1, acc[1]] : [acc[0], acc[1] + 1];
    }, [0, 0]);
}