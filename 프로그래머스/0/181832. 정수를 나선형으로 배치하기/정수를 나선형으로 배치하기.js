const solution = (n) => {
    let arr = new Array(n).fill(0).map((v) => {
        return [...new Array(n).fill(1)];
    });
    
    let i = 0, j = 0, mode = 0;
    arr[0][0] = 1;
    
    for (let k = 2; k <= n * n; k++) {
        switch (mode % 4) {
            case 0: // ->
                j++;
                arr[i][j] = k;
                if (j === n - 1 - Math.floor(mode / 4)) {
                    mode++;
                }
                break;
            case 1: // v
                i++;
                arr[i][j] = k;
                if (i === n - 1 - Math.floor(mode / 4)) {
                    mode++;
                }
                break;
            case 2: // <-
                j--;
                arr[i][j] = k;
                if (j === Math.floor(mode / 4)) {
                    mode++;
                }
                break;
            case 3: // ^
                i--;
                arr[i][j] = k;
                if (i === Math.floor(mode / 4) + 1) {
                    mode++;
                }
                break;
        }
    }
    return arr;
}