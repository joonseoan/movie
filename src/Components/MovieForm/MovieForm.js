import React from 'react';
import  { connect } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';

import { enterMovieInfo, fetchMovies } from '../../Actions';

import validation from '../../Utils/validation';
import inputAttributes from '../../Utils/inputAttributes';
import { Input, Button } from '../Common';
import MovieList from '../MovieList/MovieList';
import './MovieForm.scss';

const MovieForm = props => {

    // handleBlur and handleChange are from Formik to validate user input data
    const renderInputs = (handleBlur, handleChange) => {

        // inputAttributes: from attribute data from "Utility" directory
        return inputAttributes.map((input, index) => {
            const { type, id, name, label, placeholder } = input;
            return (
                <Input
                    key={ index } 
                    type={ type }
                    id={ id }
                    name={ name }

                    // onChange is "props" name
                    // handleChange from Formik
                    onChange={ handleChange }
                    // onReactOnChange from react's comonent function
                    onReactChange={ onReactChange }
                    // current value from redux
                    values={ props.searchMovies }
                    label={ label }
                    placeholder={ placeholder || undefined }
                    // Formik's callback function when validation error exists
                    ErrorMessage={ ErrorMessage }
                    // From Formik
                    handleBlur={ handleBlur }
            />);
        });
    }

    // onSubmit to invoke "fetchMovies" action creator
    const handleOnSubmit = movies => {
        props.fetchMovies(movies);
    }

    // onReactChange to invoke "enterMovieInfo" action creator for user text input change
    const onReactChange = e => {
        const { name, value, type, checked } = e.target;
        props.enterMovieInfo({ name, value, type, checked });
    }

    return(
        <Formik
            // Formik's initvalue setup for validation
            // FYI, checkbox value is not required to be validated 
            initialValues={{
                title: '',
                movie: false,
                series: false,
                episode: false,
                year: ''
            }}

            // Validation rules seup from "Yup" library located in "Utility" directory
            // Formik's validation functins are connected with "Yup"
            validationSchema ={ validation }
            
            // Formick's onSubmit invokes React's "onSubmit"
            onSubmit={values => {

                // values are userinput data is updated on Formiks "handleOnChange"
                const movieInputs = {
                    title: values.title,
                    movie: values.movie,
                    series: values.series,
                    episode: values.episode,
                    year: values.year
                }

                // React's handleOnChange
                handleOnSubmit(movieInputs);
            }}
            
            // Formik's built props system
            render={props => {
                
                // props for input validation
                const { handleBlur, handleSubmit, handleChange } = props;
                
                return (
                    <div className="movie-form">
                        <h2 className="movie-form-title">
                            Start Search Now!
                        </h2>
                        <form onSubmit={ handleSubmit }>
                            <div className ="movie-search">
                                {/* invoke renderInput with Formik's props value */}
                                { renderInputs(handleBlur, handleChange) }
                            </div>    
                            <Button type="submit">Search</Button>
                        </form>
                        <MovieList />
                    </div>
                );
            }}
        />
        
    );
}

// from redux store
const mapStateToProps = ({ searchMovies }) => {
    return { searchMovies };
}
// Before React runs, Redux store and action creators are invoked first
export default connect(mapStateToProps, { enterMovieInfo, fetchMovies })(MovieForm);