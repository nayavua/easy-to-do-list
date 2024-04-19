import React from 'react';

const ButtonComponent = (props) => {
    return (
        < button className='delete__btn' type = {props.type} onClick = {props.onClick} >
        { props.text }
        </button>
    );
};

export default ButtonComponent;