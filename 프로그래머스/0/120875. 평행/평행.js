const calculateGradient = (dot1, dot2) => {
    return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]); // 기울기 = Y diff / X diff
}

const solution = (dots) => {
    let aList = new Set();
    let flag = false;
    
    // 제약조건에 따라, 세 가지 경우만 존재함.
    const comb1 = [dots[0], dots[1], dots[2], dots[3]]; // 1번-2번, 3번-4번
    const comb2 = [dots[0], dots[2], dots[1], dots[3]]; // 1번-3번, 2번-4번
    const comb3 = [dots[0], dots[3], dots[1], dots[2]]; // 1번-4번, 2번-3번

    // 기울기 계산 및 비교.
    if (calculateGradient(comb1[0], comb1[1]) === calculateGradient(comb1[2], comb1[3])) flag = true;
    if (calculateGradient(comb2[0], comb2[1]) === calculateGradient(comb2[2], comb2[3])) flag = true;
    if (calculateGradient(comb3[0], comb3[1]) === calculateGradient(comb3[2], comb3[3])) flag = true;
    
    return flag ? 1 : 0;
}