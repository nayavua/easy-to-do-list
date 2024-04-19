import React from 'react';
import ToDosList from './ToDosList';

const RenderComponent = () => {
    const toDos = [
        { id: 1, todo: 'firstToDo' },
        { id: 2, todo: 'secondTodo' },
        { id: 3, todo: 'thirdToDo' },
        { id: 4, todo: 'fourthToDo' },
    ];
    
    return <div>
        {toDos.map((todo) => {
            console.log(todo);
            return <ToDosList key={todo.id} todo={todo.todo} />
        })}
    </div>
}

export default RenderComponent;