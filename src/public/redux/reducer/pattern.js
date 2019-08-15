const intialState = {
    patternList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const pattern = (state = intialState, action) => {
    switch (action.type) {
        case 'GET_PATTERN_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_PATTERN_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_PATTERN_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                patternList: action.payload.data.result
            }
        default: 
            return state
    }
}

export default pattern