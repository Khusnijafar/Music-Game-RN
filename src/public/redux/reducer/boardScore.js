const initialState = {
    scoreList: [],
    scoreListById: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const boardScore = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SCORE_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_SCORE_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_SCORE_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                scoreList: action.payload.data.result
            }
        case 'GET_SCORE_ID_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_SCORE_ID_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_SCORE_ID_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                scoreListById: action.payload.data.result
            }
        default: // need this for default case
            return state 
    }
}

export default boardScore