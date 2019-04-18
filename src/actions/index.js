//action creator function - MUST RETURN an action, action is an object and must have a type property

export function signIn(user){
    console.log('Sign In Action Creator, user data:', user);

    return {
        type: 'SIGN_IN'
    }
}