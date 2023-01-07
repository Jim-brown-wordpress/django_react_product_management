import {createStore , compose , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducer';


const DEVTOOLS = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = DEVTOOLS?
 createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        DEVTOOLS
    )
) : createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk)
    )
)


export {store};
