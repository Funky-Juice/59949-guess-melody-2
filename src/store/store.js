import {createStore, applyMiddleware} from 'redux';
import {compose} from 'recompose';
import thunk from 'redux-thunk';
import reducer from './reducer';
import {createAPI} from '../services/api';

const api = createAPI((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
    )
);

export default store;
