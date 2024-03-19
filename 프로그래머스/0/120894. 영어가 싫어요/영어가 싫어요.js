const solution = (numbers) => {
    const numAlphabet = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];
    let answer = '';
    
    numbers = [...numbers];
    
    for (let i = 0; i < numbers.length;) {
        for (let j = 0; j < numAlphabet.length; j++) {
            if (numAlphabet[j].slice(0, 3) === numbers.slice(i, i + 3).join('')) {
                answer += j;
                i += numAlphabet[j].length;
                break;
            }
        }
    }
    return Number(answer);
}