const solution = (board, k) => {
    return board.reduce((acc1, arr, i) => {
        return acc1 + arr.reduce((acc2, v, j) => {
            return (i + j <= k) ? acc2 + v : acc2;
        }, 0);
    }, 0);
}