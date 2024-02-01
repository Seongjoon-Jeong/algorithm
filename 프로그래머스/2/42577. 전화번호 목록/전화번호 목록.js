const solution = (phone_book) => {
    const map = new Map();
    
    for (let i = 0; i < phone_book.length; i++) {
        let a = phone_book[i];
        
        map.set(a, a.length);
    }

    let flag = true;
    
    for (let i = 0; i < phone_book.length; i++) {
        for (let j = 0; j < phone_book[i].length; j++) {
            const target = map.get(phone_book[i].substr(0, j + 1)) || 0;
            // console.log(`i=${phone_book[i]}, sub = ${phone_book[i].substr(0, j + 1)}, target = ${target}`); //
            if (target > 0 && phone_book[i] !== phone_book[i].substr(0, j + 1)) {
                flag = false;
                break;
            }
        }
        if (!flag) break;
    }
    
    return flag;
}