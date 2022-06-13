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
                page: 1,
                ...action.payload.data
            }
        case FILTER.CLEAR:
            return {
                s: state.s,
                page: 1,
            }
        default:
            return state
    }
}

export default filterReducer