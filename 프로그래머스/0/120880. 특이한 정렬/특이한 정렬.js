const solution = (numlist, n) => {
    numlist.sort((a, b) => b - a);
    numlist = numlist.map((v) => [v, Math.abs(v - n)]);
    numlist.sort((a, b) => a[1] - b[1]);
    return numlist.map((v) => v[0]);
}