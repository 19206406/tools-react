

export const createTodos = () => {
    const todos = []; 

    for (let i = 0; i < 50; i++){
        todos.push({
            id: i,
            text: 'Todo ' + (i + 1), 
            completed: Math.random() > 0.5
        }); 
    }
    return todos; 
}



export const filterTodos = (todos, tab) => {
    console.log('[ARTIFICIALY SLOW] Filtering ' + todos.legth + ' todos for ' + tab + ' tab'); 
    let startTime = performance.now(); 

    while (performance.now() - startTime < 500) {
        // emulación de código extremna memoria 
    }

    return todos.filter(todo => {
        if (tab == 'all') {
            return true; 
        } else if ( tab === 'active' ) {
            return !todo.completed
        } else if (tab == 'completed') {
            return todo.completed
        }
    }); 
}















