import React from 'react';
import './Input.scss';

// defining two types of inputs: text input and checkbox
// "onChange" from Formik is for validation and onReactChange from React is for sending user data to redux store
// Formik uses its own built-in call back functions like Redux-From
// The user data are saved at cache memory in redux store and then they are returned data components even when the page swiches
// Therefore both are required at the moment
const Input = ({ type, id, name, onFormikChange, reactValues, placeholder, label, formikHandleBlur, FormikErrorMessage, onReactChange, formikValues }) => {  

    return( 
        <React.Fragment>
            {
                type !== 'checkbox' ? 
                // assigning props data to each input element's attributes
                    (<div className="movie-search-group">
                        <input
                            className="movie-search__input--text"
                            type={ type }
                            id={ id } 
                            name={ name }
                            onChange={e => {
                                // onChanges for Formik and React
                                onFormikChange(e);
                                onReactChange(e);
                            }}
                            // values are from redux store
                            value={ formikValues[name] }
                            placeholder={ placeholder }
                            onBlur={ formikHandleBlur }
                    />
                         <label htmlFor={ id } className="movie-search__input--label">{ label }</label>
                        <div className="movie-search__validation">
                            <FormikErrorMessage name={ name }>
                                { msg => { 
                                    if(name === 'title') {
                                        return <div>{ reactValues.title && !formikValues.title ? '' : msg }</div>;
                                    } else {
                                        return <div>{ reactValues.year && !formikValues.year ? '' : msg }</div>
                                    }
                                }}
                            </FormikErrorMessage>
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
                                onFormikChange(e);
                                onReactChange(e);
                            }}
                            checked={ formikValues[name] }  
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