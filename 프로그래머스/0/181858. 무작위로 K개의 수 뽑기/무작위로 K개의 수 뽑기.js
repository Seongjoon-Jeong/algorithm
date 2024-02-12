const solution = (arr, k) => {
    const numSet = new Set(arr);
    let answer = Array.from(numSet).slice(0, k);
    
    if (answer.length < k) {
        const minusArr = Array(k - answer.length).fill(-1);
        answer = [...answer, ...minusArr];
    }
    return answer;
}