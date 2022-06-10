import { FILTER } from '../../../../utils/actionType'

const initialState = {
    s: 'pokemon',
    page: 1
}

const filterReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FILTER.SET:
            return {
                ...state,
                ...action.payload.data
            }
        default:
            return state
    }
}

export default filterReducer