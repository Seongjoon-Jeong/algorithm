const solution = (todoList, finished) => {
    return todoList.filter((val, i) => {
        return finished[i] ? false : true;
    });
}