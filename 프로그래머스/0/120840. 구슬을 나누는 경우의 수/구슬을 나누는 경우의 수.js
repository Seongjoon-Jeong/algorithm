const fac = (n) => {
    if (n <= 1) return 1;
    return n * fac(n - 1);
}
    
const solution = (balls, share) => {
    const nFac = fac(balls);
    const mFac = fac(share);
    const diffFac = fac(balls - share)
    return Math.round(nFac / (diffFac * mFac));
}