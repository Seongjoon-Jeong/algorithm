const solution = (str) => {
    return [...str].map((v) => {
        return v === v.toUpperCase() ? v.toLowerCase() : v.toUpperCase();
    }).join("");
}