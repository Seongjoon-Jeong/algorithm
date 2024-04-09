const solution = ([userId, userPw], db) => {
    const result = db.reduce((acc, [id, pw]) => {
        if (id === userId && pw === userPw) {
            return acc + 1;
        } else if (id === userId && pw !== userPw) {
            return acc + 2;
        } else {
            return acc;
        }
    }, 0);
    return result > 1 ? "wrong pw" : result === 1 ? "login" : "fail";
}