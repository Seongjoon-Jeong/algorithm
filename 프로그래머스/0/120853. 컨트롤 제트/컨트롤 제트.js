const solution = (s) => {
    let prevNum = 0;
    return s.split(' ').reduce((acc, v) => {
        if (v === 'Z') {
            if (prevNum[0] === '-') {
                return acc + Number([...prevNum].slice(1).join(''));
            } else {
                return acc - Number(prevNum);
            }
        } else if (v[0] === '-') {
            prevNum = v;
            return acc - Number([...v].slice(1).join(''));
        } else {
            prevNum = v;
            return acc + Number(v);
        }
    }, 0);
}