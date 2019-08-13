const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    isFulfilled: false,
    token: '',
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
                data: action.payload.data.result
            }
    }
}

export default user