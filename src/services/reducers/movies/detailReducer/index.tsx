import { DETAIL } from '../../../../utils/actionType'

const initialState = {
    isLoading: false,
    data: {},
    errorMessage: false
}

const detailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case DETAIL.ATTEMPT:
            return {
                ...state,
                isLoading: action.payload.isLoading
            }
        case DETAIL.SUCCEED:
            return {
                ...state,
                isLoading: false,
                data: action.payload.data.data
            }
        case DETAIL.FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default detailReducer