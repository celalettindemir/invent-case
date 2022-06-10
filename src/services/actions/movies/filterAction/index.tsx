import { FILTER, setSuccess } from '../../../../utils'
import { store } from '../../../store';
import searchAction from '../searchAction'

const filterAction = (params: any) => {
    return (dispatch: any) => {
        dispatch(setSuccess(FILTER.SET, params));
        dispatch(searchAction(store.getState().filter));
    };
}

export default filterAction