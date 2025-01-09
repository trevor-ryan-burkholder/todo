const sortTodos = (todos, sortPref) => {
    switch (sortPref) {
        case 'High to Low':
            return [...todos].sort((a, b) => b.priority.localeCompare(a.priority))
        case 'Low to High':
            return [...todos].sort((a, b) => a.priority.localeCompare(b.priority))
        case 'Completed to Incomplete':
            return [...todos].sort((a, b) => b.completed - a.completed)
        case 'Incomplete to Completed':
            return [...todos].sort((a, b) => a.completed - b.completed)
        default:
            return todos;
    }
}

export default sortTodos;