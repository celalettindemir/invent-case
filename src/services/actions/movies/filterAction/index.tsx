import { FILTER, setSuccess } from '../../../../utils'
import { store } from '../../../store';
import searchAction from '../searchAction'

export const filterAction = (params: any) => {
    return (dispatch: any) => {
        dispatch(setSuccess(FILTER.SET, params));
        dispatch(searchAction({ ...store.getState().filter, ...params }));
    };
}
export const filterClearAction = () => {
    return (dispatch: any) => {
        dispatch(setSuccess(FILTER.CLEAR, {}));
        dispatch(searchAction(store.getState().filter));
    };
}