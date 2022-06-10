import { SEARCH } from '../../../../utils/actionType'

const initialState = {
    isLoading: false,
    data: {},
    errorMessage: false
}

const searchReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SEARCH.ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case SEARCH.SUCCEED:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        case SEARCH.FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default searchReducer