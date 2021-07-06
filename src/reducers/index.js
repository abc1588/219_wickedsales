import { combineReducers } from 'redux';  //define the shape of state and initialize values, import all reducer functions here
import { reducer as formReducer} from 'redux-form';
import userReducer from './user_reducer';
import productsReducer from './products_reducer';


const rootReducer = combineReducers({
    form: formReducer,
    products: productsReducer,
    user: userReducer
});

// const state = {
//     form: {},
//     user: {
//         auth: false,
//         username: ''
//     }
// }

export default rootReducer;