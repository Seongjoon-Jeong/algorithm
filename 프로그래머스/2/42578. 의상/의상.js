const solution = (clothes) => {
    const map = new Map();
    let answer = 1;
    
    clothes.forEach((value) => {
        if (map.has(value[1])) {
            map.set(value[1], map.get(value[1]) + 1);
        } else {
            map.set(value[1], 1);
        }
    });
    
    for (let key of map) {
        answer *= key[1] + 1; // 의상의 종류마다 해당 의상을 안 입는 경우가 있으므로 '+1' 함.
    }
    
    return answer - 1; // 코니는 모든 의상을 안 입는 경우는 없으므로, 해당 경우를 빼줌.
    
}