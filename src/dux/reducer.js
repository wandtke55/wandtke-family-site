const initialState = {
    username: ''
}



const USERNAME = 'USERNAME'


export default function reducer(state = initialState, action){
    switch (action.type) {

        case USERNAME:
        return Object.assign({}, state, {username: action.payload})

        default:
        return state
    }
}

export function username(username){
    return {
        type: USERNAME,
        payload: username
    }
}