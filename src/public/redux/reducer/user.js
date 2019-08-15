const initialState = {
    token: null,
    id_user: null,
    email: null,
    fullname: null,
    user: null,
    isLoading: false,
    isError: false,
    isFulfilled: false,
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_PENDING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                isFulfilled: false
            }
        case 'LOGIN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isError: true,
                isFulfilled: false
            } 
        case 'LOGIN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                isFulfilled: true,
                user: action.payload.data.result,
                id_user: action.payload.data.result.id_user,
                email: action.payload.data.result.email,
                token: action.payload.data.result.token,
                fullname: action.payload.data.result.fullname
            }
        default: // need this for default case
            return state 
    }
}

export default user