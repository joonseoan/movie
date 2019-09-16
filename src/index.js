import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './Reducers';
import App from './Components/App';

const store = createStore(reducers, applyMiddleware(reduxThunk));

// React-redux interface Wraps up React
//  Then, it runs before React. 
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);