import React from  'react';
import {Route, Router, Switch } from 'react-router-dom';

import MovieForm from './MovieForm/MovieForm';
import MovieDetail from './MovieDetail/MovieDetail';
import history from '../history';

export default () => {
    return(      
        <Router history={ history } >
            <div>
                <Switch>
                    <Route path="/" exact component={ MovieForm } />
                    <Route path="/MovieDetail/:id" exact component={ MovieDetail } />
                </Switch>
            </div>    
        </Router>
    );
} 
    


