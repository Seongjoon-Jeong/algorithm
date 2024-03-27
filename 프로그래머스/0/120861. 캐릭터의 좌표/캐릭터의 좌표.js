const solution = (keyinput, board) => {
    const limitOfX = Math.floor(board[0] / 2);
    const limitOfY = Math.floor(board[1] / 2);
    return keyinput.reduce(([x, y], v) => {
        if (v === "up") {
            if (y < limitOfY) {
                return [x, ++y];
            }
        } else if (v === "down") {
            if (y > (0 - limitOfY)) {
                return [x, --y];
            }
        } else if (v === "right") {
            if (x < limitOfX) {
                return [++x, y];
            }
        } else {
            if (x > (0 - limitOfX)) {
                return [--x, y];
            }
        }
        return [x, y];
    }, [0, 0]);
}