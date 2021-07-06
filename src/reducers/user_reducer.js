import types from '../actions/types';

const DEFAULT_STATE = {
  auth: false,
  email: ''
};

// const exampleAction = {  //every action must have a type property
//     type: 'LOG_USER_IN',
//     username: 'JimBob'
// }

function userReducer(state = DEFAULT_STATE, action) {
    switch (action.type) {
        // case 'LOG_USER_IN':
        //     return {...state, auth: true, username: action.username};
        case types.SIGN_IN:
            return {...state, auth: true, email: action.email };
        // Make case for 'SIGN_OUT'
        case types.SIGN_OUT:
            return {...state, auth: false };
            //return { ...DEFAULT_STATE};
        default:
            return state;
    }
}

export default userReducer;