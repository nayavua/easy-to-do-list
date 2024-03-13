import React, { useState } from 'react';
import ListItemComponent from './ListItemComponent';

const ListComponent = () => {
    const [input, setInput] = useState('');
    const [item, setItem] = useState([]); 

    const OnClickHandler = () => {
        const updatedElement = [...item, input];
        setItem(updatedElement); 
        setInput('');
    }

    const OnChangeHandler = (e) => {
        const value = e.target.value;
        setInput(value);
    }
           
    function checkInput() {
            const inputField = document.getElementById('task-input');
            const inputValue = inputField.value;

            if (inputValue.trim() === "") {
                alert("Будь ласка, введіть завдання!");
            } else {
                OnClickHandler();
            }
    } 
    const OnEnterHandler = (e) => {
        if (e.key === 'Enter'){
            const updatedElement = [...item, input];
            setItem(updatedElement); 
            setInput('');
        }
    }

    return (
        <div class="task">
            <h1>Твій список завдань</h1>
            <input class="task__input" id="task-input" placeholder="Сходити в магазин" onKeyDown={OnEnterHandler} onChange={OnChangeHandler} value={input} />
            <p>Загалом: {item.length}</p>
            <ul class="task__list">
                {item.map((element, index) => (
                    <ListItemComponent key={index} element={element}/>
                ))}
            </ul>
            <button class="task__add" onClick={checkInput}>Додати нове завдання</button>
        </div>
    );

}

export default ListComponent;
