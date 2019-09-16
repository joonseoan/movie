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

    const renderInputs = (handleBlur, handleChange) => {
        return inputAttributes.map((input, index) => {
            const { type, id, name, label, placeholder } = input;
            return (<Input
                key={ index } 
                type={ type }
                id={ id }
                name={ name }
                onChange={ handleChange }
                onReactChange={ handleReactOnChange }
                values={ props.searchMovies }
                label={ label }
                placeholder={ placeholder || undefined }
                ErrorMessage={ ErrorMessage }
                handleBlur={ handleBlur }
            />);
        });
    }

    const handleOnSubmit = movies => {
        props.fetchMovies(movies);
    }

    const handleReactOnChange = e => {
        const { name, value, type, checked } = e.target;
        props.enterMovieInfo({ name, value, type, checked });
    }

    return(
        <Formik
            initialValues={{
                title: '',
                movie: false,
                series: false,
                episode: false,
                year: ''
            }}

            validationSchema ={ validation }
            
            onSubmit={values => {
                const movieInputs = {
                    title: values.title,
                    movie: values.movie,
                    series: values.series,
                    episode: values.episode,
                    year: values.year
                }
                handleOnSubmit(movieInputs);
            }}

            enableReinitialize={ true}
    
            render={props => {
                
                const { handleBlur, handleSubmit, handleChange } = props;
                
                return (
                    <div className="movie-form">
                        <h2 className="movie-form-title">
                            Start Search Now!
                        </h2>
                        <form onSubmit={ handleSubmit }>
                            <div className ="movie-search">
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

const mapStateToProps = ({ searchMovies }) => {
    return { searchMovies };
}

export default connect(mapStateToProps, { enterMovieInfo, fetchMovies })(MovieForm);