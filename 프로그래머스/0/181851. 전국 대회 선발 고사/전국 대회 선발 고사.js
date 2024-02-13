const solution = (rank, attendance) => {
    let answer = 0;
    let student = [];
    
    rank.forEach((v, i) => {
        if (attendance[i]) {
            student.push({
                "idx": i,
                "rank": v
            });
        }
    });
    student.sort((a, b) => a.rank - b.rank);
    
    return 10000 * student[0].idx + 100 * student[1].idx + student[2].idx;
}