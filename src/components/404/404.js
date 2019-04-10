import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss';

export default props => {
    return (
        <div className="not-found">
            <div className="not-found-content center">
                <h1>404 Page Not Found</h1>
                <div>
                    <i className="material-icons">home</i>

                    <Link to="/" >

                    </Link>



                </div>
            </div>
        </div>
    )
}