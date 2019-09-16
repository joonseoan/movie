import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../Common';

import './MovieDetail.scss';

const MovieDetail = props => {
    if(Object.keys(props.movieDetail).length !== 0) {
        const {Title, Poster, Year, Type, Released, Genre, Ratings } = props.movieDetail;
        return(<div className="movie-detail">
            <div className="movie-detail__content">
                <div className="movie-detail__heading">
                    <h2>{ Title }</h2>    
                </div>
                <div className="movie-detail__poster">
                    <img className="movie-detail__poster--size" src={ Poster !== 'N/A' ? Poster : '/img/no_available.PNG' } alt={ Title } />
                </div>
                <ul className="movie-detail__list">
                    <li>{ Year }</li>
                    <li>{ Type }</li>
                    <li>{ Released }</li>
                    <li>{ Genre }</li>
                    <li>{ Ratings.length > 0  && Ratings[0].Value ? Ratings[0].Value : 'Not Available'}</li>
                </ul>
            </div>
            <Button>
                <Link to='/' className="link">Back</Link>
            </Button>
        </div>);
    } else {
        return <div>Waiting...</div>
    }  
}

const mapStateToProps = ({ movieDetail }) => {
    return { movieDetail };
}

export default connect(mapStateToProps)(MovieDetail);