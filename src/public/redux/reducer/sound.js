const initialState = {
    soundList: [],
    isLoading: false,
    isRejected: false,
    isFulfilled: false
}

const sound = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SOUND_PENDING':
            return {
                ...state,
                isLoading: true,
                isRejected: false,
                isFulfilled: false
            }
        case 'GET_SOUND_REJECTED':
            return {
                ...state,
                isLoading: false,
                isRejected: true,
                isFulfilled: false
            }
        case 'GET_SOUND_FULFILLED':
            return {
                ...state,
                isLoading: false,
                isRejected: false,
                isFulfilled: true,
                soundList: action.payload.data.result
            }
        default:
            return state       
    }
}

export default sound