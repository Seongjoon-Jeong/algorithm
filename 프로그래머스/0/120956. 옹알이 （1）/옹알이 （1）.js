function solution(babbling) {
    // const babbling = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];
    const possibleWords = new Set(["aya", "ye", "woo", "ma"]);
    let count = 0;
    
    for (const word of babbling) {
        let remainWord = "";
        let prevWord = "";
        
        for (const char of word) {
            remainWord += char;
            
            if (possibleWords.has(remainWord)) {
                prevWord = remainWord;
                remainWord = "";
            }
        }
        if (remainWord === "") count ++;
    }
    
    return count;
}