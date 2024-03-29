const solution = (price) => {
    let discountRate = 1;
    if (price >= 500000) {
        discountRate = 0.2;
    } else if (price >= 300000) {
        discountRate = 0.1;
    } else if (price >= 100000) {
        discountRate = 0.05;
    }
    return (discountRate === 1) ? price : Math.floor(price - price * discountRate);
}