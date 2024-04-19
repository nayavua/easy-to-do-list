import React from "react";

const ListItemComponent = (props) => {
    return (
        <>
        <li className='task__item' key={props.id}>
        {props.name} 
            </li>
        {props.children}
        </>
    )
}

export default ListItemComponent;