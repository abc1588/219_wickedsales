import React from 'react';

export default props => {
    console.log('Input props:', props);

    const { col = 's12', input, id, label, type = 'text'} = props;

    return (
        <div className={`input-field col ${col}`}>
            <input {...input} id={id} type={type}/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
}