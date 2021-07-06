// ES6
export default (store) => (next) => (action) => {
    // code goes here
    if(typeof action !== 'function'){
        return next(action);
    }
    return action(store.dispatch);
}

// ES5
// export default function (store) {
//     return function(next){
//         return function (action) {
//             // code goes here
//         }
//     }
// }
// think(reduxStore)(theNextFunctionInLine)(action);

