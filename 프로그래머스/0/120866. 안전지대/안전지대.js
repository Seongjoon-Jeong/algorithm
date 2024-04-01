const solution = (board) => {
    // Array.fill() 를 사용하는 경우 shallow copy가 되므로, from() 메서드 사용함!
    let arr = Array.from({length: board.length}, () => Array.from({length: board.length}, () => 0));
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 1) {
                for (let x = i - 1; x <= i + 1; x++) {
                    for (let y = j - 1; y <= j + 1; y++) {
                        if (x >= 0 && x < board.length && y >= 0 && y < board.length) {
                            arr[x][y] = 1;
                        }
                    }
                }
            }
        }
    }
       
    return (board.length * board.length) - arr.reduce((acc1, v1) => {
        return acc1 + v1.reduce((acc2, v2) => acc2 + v2, 0);
    }, 0);
}