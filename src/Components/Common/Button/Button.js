import React from 'react';
import './Button.scss';

// defining two types of buttons
// receiving props including event's call back from parent components
const Button = ({ children, type, onClick }) => {
    return(
        type ? (
            <button type={ type } className="btn btn--white btn--animated">
                { children }
            </button>) : (
            <div onClick={ onClick } className="btn-text">
                { children }
            </div>
        )
    );
}

export { Button };