import React from 'react';
import './Input.scss';

const Input = ({ type, id, name, onChange, values, placeholder, label, handleBlur , ErrorMessage, onReactChange }) => {  

    return( 
        <React.Fragment>
            {
                type !== 'checkbox' ? 
                    (<div className="movie-search-group">
                        <input
                            className="movie-search__input--text"
                            type={ type }
                            id={ id } 
                            name={ name }
                            onChange={e => {
                                onChange(e);
                                onReactChange(e);
                            }}
                            value={ values[name] }  
                            placeholder={ placeholder }
                            onBlur={ handleBlur }
                            // style={} 
                            // className=""
                    />
                         <label htmlFor={ id } className="movie-search__input--label">{ label }</label>
                        <div className="movie-search__validation">
                            <ErrorMessage name={ name }>
                                { msg => { 
                                    return <div>{ msg }</div>;
                                }}
                            </ErrorMessage>
                        </div>
                    </div>
                ) : (
                    
                    <div>
                        <input 
                            className="movie-search__input--checkbox"
                            type={ type }
                            id={ id } 
                            name={ name }
                            onChange={e => {
                                onChange(e);
                                onReactChange(e);
                            }}
                            checked={ values[name] }  
                            // style={} 
                            // className=""
                        />
                        <label htmlFor={ id }className="movie-search__checkbox--label">
                            <span className="movie-search__checkbox--button">&nbsp;</span>
                            { label }
                        </label>
                    </div>
            )}
            
        </React.Fragment>
    );
}

export { Input };