import {createStore,compose} from 'redux';
import myReducer from './reducers/index';

const store = createStore(
    myReducer,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)
export default store;