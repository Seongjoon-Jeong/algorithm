const solution = (numer1, denom1, numer2, denom2) => {
    let a = numer1 * denom2 + denom1 * numer2;
    let b = denom1 * denom2;
    
    for (let i = b; i > 1; i--) {
        if (a % i === 0 && b % i === 0) {
            a /= i;
            b /= i;
            break;
        }
    }
    
    return [a, b];
}