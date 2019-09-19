import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovieDetail, enterMovieInfo } from '../../Actions';

import { Button } from '../Common';
import './MovieList.scss';

const MovieList = props => {

    // just in case, wait until the movie data comes in
    if(!props.searchResult) return <div />;

    const renderMovies = () => {
        if(props.searchResult) {
            // rendering all movie data
            return props.searchResult.map(movie => {
                const { Title, Type, Year, Poster, imdbID } = movie;
                return(
                    <div className="movie-list__group__item" key={ movie.imdbID }>
                         <div className="movie-list__group__card-item">
                            <div className="card-side card__front">
                                <h4 className="card__title">{ Title }</h4>
                                <div className="card__detail">
                                    <ul>
                                        <li>{ Type }</li>
                                        <li>{ Year }</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="card-side card__back">
                                <div className="card__back--post">
                                    <img className="card__back--picture" src={ Poster !== 'N/A' ?
                                        Poster : 
                                        '/img/no_available.PNG' } 
                                        alt={ Title } 
                                    />
                                </div>
                                {/* by using the inline function below, invoke the action creator to get the movie detail*/}
                                <Button onClick={ () => props.fetchMovieDetail(imdbID) }>
                                
                                {/* Link to the second page */}
                                    <Link className="link" to={`/MovieDetail/${ imdbID }`}>Detail</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            });
        }
    }

    return(
        <div className="movie-list">
            { props.searchResult.error ? 
                // render error message when movies are not available
                <div className="movie-list__error">{ props.searchResult.error }</div> :
                // render movie list
                <div className="movie-list__group">{ renderMovies() }</div> }
        </div>
    );
}

const mapStateProps = ({ movieList }) => {
    return { 
        searchResult: movieList
    };
}

export default connect(mapStateProps, { fetchMovieDetail, enterMovieInfo })(MovieList);

