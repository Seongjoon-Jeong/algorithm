const solution = (age) => {
    return age.toString().split('').map(v => String.fromCharCode(Number(v) + 97)).join('');
}