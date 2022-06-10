import axios from 'axios'
import { DETAIL, setLoading, setSuccess, setFail } from '../../../../utils'

const detailAction = (params: any) => {
    return (dispatch: any) => {
        dispatch(setLoading(DETAIL.ATTEMPT))
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}`,
            params: {
                apiKey: `${process.env.REACT_APP_API_KEY}`,
                ...params
            }
        })
            .then(result => {
                dispatch(setSuccess(DETAIL.SUCCEED, result))
            })
            .catch(error => {
                dispatch(setFail(DETAIL.FAILED, error))
            })
    }
}

export default detailAction