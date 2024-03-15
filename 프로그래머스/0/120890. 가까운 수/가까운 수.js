const solution = (arr, n) => {
    arr = [...arr, n].sort((a, b) => a - b);
    const i = arr.indexOf(n);
    return i === 0 ? arr[1] : i === arr.length - 1 ? arr[arr.length - 2] : n - arr[i - 1] <= arr[i + 1] - n ? arr[i - 1] : arr[i + 1];
}