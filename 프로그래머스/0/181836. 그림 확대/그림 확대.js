const solution = (picture, k) => {
    picture = picture.map((v) => {
        return [...v].reduce((acc, v) => acc + new Array(k).fill(v).join(''), '');
    });
    
    return picture.reduce((acc, v) => {
        return [...acc, ...new Array(k).fill(v)];
    }, []);
}