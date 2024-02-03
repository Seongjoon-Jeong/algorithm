const solution = (genres, plays) => {
    let genresMap = {};
    let sumOfPlaysEachGenres = [];
    
    genres.forEach((value, index) => {
        if (genresMap.hasOwnProperty(value)) {
            genresMap[value].push({
                "idx" : index,
                "plays": plays[index]
            });
        } else {
            genresMap[value] = [{
                "idx" : index,
                "plays": plays[index]
            }];
        }
    });
    
    for (let genre in genresMap) {
        genresMap[genre].sort((a, b) => b.plays - a.plays); // 2번 조건, 장르 내 내림차순 정렬 (3번 조건도 자동 해결됨.)
        const sumOfPlays = genresMap[genre].reduce((acc, value) => {
            return acc += value.plays;
        }, 0); // 1번 조건, 장르별 총 재생 수 계산
        sumOfPlaysEachGenres.push({
            "genre": genre,
            "total_plays": sumOfPlays
        });
    }
    
    // 1번 조건, 장르별 재생 수 총합이 높은 순 정렬.
    sumOfPlaysEachGenres.sort((a, b) => b.total_plays - a.total_plays);
    
    // 장르별 2개씩만 더함.
    let answer = [];
    for (let album of sumOfPlaysEachGenres) {
        for (let i = 0; i < 2; i++){
            if (genresMap[album.genre].length === 1) {
                answer.push(genresMap[album.genre][0].idx);
                break;
            } else {
                answer.push(genresMap[album.genre][i].idx);
            }
        }
    }
    
    return answer;
}