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
                data: action.payload.data.data
            }
        case DETAIL.FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        default:
            return state
    }
}

export default detailReducer