const solution = (n) => {
    let numList = [];
    for (let i = 1; i <= Math.floor(n / 2); i++) {
        if (n % i === 0) {
            if (i * i === n) return 1;
        }
    }
    return 2;
}