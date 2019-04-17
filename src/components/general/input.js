import React from 'react';

export default props => {
    console.log('Input props:', props);

    const { col = 's12', input, id, label, meta: {error, touched}, type = 'text'} = props;

    return (
        <div className={`input-field col ${col}`}>
            <input {...input} id={id} type={type}/>
            <label htmlFor={id}>{label}</label>
            <p className="text-darken-2">{touched && error}</p>
        </div>
    );
}