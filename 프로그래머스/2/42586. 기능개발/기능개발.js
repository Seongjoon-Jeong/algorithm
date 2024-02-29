const solution = (progresses, speeds) => {
    let workingDays = [];
    let lastWorkingTime = 0;
    let numOfTaskToDeploy = 0;
    let answer = [];
    
    speeds.forEach((v, i) => {
       workingDays.push(Math.ceil((100 - progresses[i]) / v));
    });
    
    workingDays.forEach((v, i) => {
        if (i === 0) {
            lastWorkingTime = v;
            numOfTaskToDeploy++;
        } else if (lastWorkingTime >= v) {
            numOfTaskToDeploy++;
        } else {
            answer.push(numOfTaskToDeploy);
            numOfTaskToDeploy = 1;
            lastWorkingTime += v - lastWorkingTime;
        }
    });
    
    answer.push(numOfTaskToDeploy);
    
    return answer;
}