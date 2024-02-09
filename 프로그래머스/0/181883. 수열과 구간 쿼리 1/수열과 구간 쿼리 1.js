const solution = (arr, queries) => {
    queries.forEach(([s, e], idx) => {
        for (let i = s; i < e + 1; i++) {
            arr[i] += 1;
        }
    });
    return arr;
}