import React from 'react';
import './Button.scss';

const Button = ({ children, icon, type, onClick }) => {
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