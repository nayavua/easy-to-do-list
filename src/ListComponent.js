import React, { useState } from 'react';
import ListItemComponent from './ListItemComponent';
import ButtonComponent from './ButtonComponent';
import { v4 as uuidv4 } from 'uuid';

const ListComponent = () => {
    const [input, setInput] = useState('');
    const [items, setItems] = useState([]);

    const OnClickHandler = () => {
        const newItem = { id: uuidv4(), name: input }; 
        setItems([...items, newItem]);
        setInput('');
    };

    const OnChangeHandler = (e) => {
        setInput(e.target.value);
    };

    const checkInput = () => {
        if (input.trim() === "") {
            alert("Будь ласка, введіть завдання!");
        } else {
            OnClickHandler();
        }
    };

    const OnEnterHandler = (e) => {
        if (e.key === 'Enter') {
            OnClickHandler();
        }
    };

    const handleDelete = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
    };

    return (
        <div className="task">
            <h1>Твій список завдань</h1>
            <input className="task__input" id="task-input" placeholder="Сходити в магазин" onKeyDown={OnEnterHandler} onChange={OnChangeHandler} value={input} />
            <p>Загалом: {items.length}</p>
            <ul className="task__list">
                {items.map((element) => (
                    <ListItemComponent key={element.id} id={element.id} name={element.name}>
                        <ButtonComponent
                            text={'Видалити'}
                            onClick={() => handleDelete(element.id)}
                            type={'button'}
                        />
                    </ListItemComponent>
                ))}
            </ul>
            <button className="task__add" onClick={checkInput}>Додати нове завдання</button>
        </div>
    );
};

export default ListComponent;
