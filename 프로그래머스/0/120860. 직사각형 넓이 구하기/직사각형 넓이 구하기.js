const solution = (dots) => {
    dots.sort((a, b) => a[1] - b[1]);
    dots.sort((a, b) => a[0] - b[0]);
    return (dots[3][0] - dots[0][0]) * (dots[3][1] - dots[0][1]);
}