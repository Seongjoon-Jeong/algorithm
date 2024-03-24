const solution = (arr, height) => {
    arr = [...arr, height].sort();
    return (arr.length - 1) - arr.lastIndexOf(height);
}