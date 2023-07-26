import {types} from "../types";


const initialState = {
    users: [],
    oneUser: []
}

export default function userReducer(state = initialState, action)  {
    switch (action.type) {
        case types.GET_USERS :
            return {...state , users: action.payload}
        case types.ONE_USER :
            return {...state , oneUser: action.payload}
        default : return state
    }
}