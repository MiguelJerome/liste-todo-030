let todos = [
    {
        texte:'Faire le labo',
        estCoche: false
    }
];

export const getTodos = () => {
    return todos;
}

export const addTodo = (texte) => {
    todos.push({
        texte: texte,
        estCoche: false
    });
}

export const checkTodo = (index) => {
    todos[index].estCoche = !todos[index].estCoche;
}
