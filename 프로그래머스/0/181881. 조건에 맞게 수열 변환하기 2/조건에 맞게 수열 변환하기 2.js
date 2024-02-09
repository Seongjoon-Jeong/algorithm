const solution = (arr) => {
    let answer = 0;
    let prevArr = [];
    let otherCasesCount = 0;
    let x = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] >= 50 && arr[i] % 2 !== 0) || (arr[i] < 50 && arr[i] % 2 === 0)) {
            otherCasesCount++;
        }
    }
    
    if (otherCasesCount === arr.length) return 0;
    
    while (1) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 50 && arr[i] % 2 === 0) {
                arr[i] = arr[i] / 2;
            } else if (arr[i] < 50 && arr[i] % 2 !== 0) {
                arr[i] = (arr[i] * 2) + 1;
            }
        }
        if (JSON.stringify(arr) === JSON.stringify(prevArr)) break;
        x++;
        prevArr = [...arr];
    }
    
    return x;
}