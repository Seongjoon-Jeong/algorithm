const solution = (participant, completion) => {
    // 오름차순 정렬
    participant = participant.sort();
    completion = completion.sort();
    
    const answer = participant
        .slice(0) // 원래 값 유지를 위해 복사해두는 것.
        .reduce((acc, value, index, arr) => {
            if (value !== completion[index]) {
                arr.splice(1);    // 인덱스 1 이후의 모든 요소를 하여 break하는 원리. (이러면 배열도 사라짐. 그래서 위에서 복사해두는 것.)
                return value;
            }
        }, "");
    
    return answer;
}