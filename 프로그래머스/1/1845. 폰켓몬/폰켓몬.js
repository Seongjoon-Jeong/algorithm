const solution = (nums) => {
    const possibleCount = nums.length / 2;
    const removeDuplicateSet = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        removeDuplicateSet.add(nums[i]);
    }

    const answer = removeDuplicateSet.size;
    return (answer >= possibleCount) ? possibleCount : answer;
}