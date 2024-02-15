const solution = (order) => {
    return order.reduce((acc, v, i) => {
       if (v.includes("cafelatte")) {
           return acc + 5000;
       } else {
           return acc + 4500;
       }
    }, 0);
}