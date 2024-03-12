const solution = (str) => {
    const vowel = ['a', 'e', 'i', 'o', 'u'];
    return [...str].filter((v) => {
        return vowel.includes(v) ? false : true;
    }).join('');
}