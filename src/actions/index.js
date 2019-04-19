import types from './types';

//action creator function - MUST RETURN an action, action is an object and must have a type property

export function signIn(user){
    console.log('Sign In Action Creator, user data:', user);

    return {
        //type: 'SIGN_IN'
        type: types.SIGN_IN,
        email: user.email
    }
}

// Make action creator for sign out
// Make the action type SIGN_OUT
export function signOut(){

    return {
        //type: 'SIGN_OUT'
        type: types.SIGN_OUT
    }
}

