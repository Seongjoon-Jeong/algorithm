const solution = (nums) => {
    const possibleCount = nums.length / 2;
    const removeDuplicateSet = [...new Set(nums)]; // Set 할당과 동시에 Array로 변환.
    const answer = removeDuplicateSet.length;
    
    return (answer >= possibleCount) ? possibleCount : answer;
}