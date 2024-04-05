const solution = (spell, dic) => {
    let answer = false;
    
    for (let i = 0; i < dic.length; i++) {
        let flag = true;
        for (let j = 0; j < spell.length; j++) {
            if (!dic[i].includes(spell[j])) {
                flag = false;
                continue;
            } else {
                dic[i] = dic[i].replace(spell[j], '');
            }
        }
        if (flag && dic[i] === '') answer = true;
    }
    return answer ? 1 : 2;
}