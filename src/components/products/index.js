import React from 'react';

export default props => {
    console.log ('Product Index Props:', props.match.path);
    return (
        <div>
            <h1>Product Routes Here</h1>
        </div>
    );
}