const solution = (rsp) => {
    const winningRules = {
        '2': '0',
        '0': '5',
        '5': '2'
    };
    return [...rsp].reduce((acc, v) => acc + winningRules[v], '');
}