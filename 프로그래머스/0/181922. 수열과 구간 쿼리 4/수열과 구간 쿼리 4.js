const solution = (arr, queries) => {
    queries.forEach(([s, e, k]) => {
        arr.forEach((value, i) => {
           if (s <= i && i <= e) {
               if (k === 0 || k === 1) {
                    arr[i] += 1;
                } else if (i % k === 0) {
                    arr[i] += 1;
                }
           } 
        });
    });

    return arr;
}