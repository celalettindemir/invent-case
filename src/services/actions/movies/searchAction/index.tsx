import axios from 'axios'
import { SEARCH, setLoading, setSuccess, setFail } from '../../../../utils'

interface SearchParam {
    s: string,
    type?: string,
    page?: number,
    y?: string,
}
const searchAction = (params: SearchParam) => {
    return (dispatch: any) => {
        dispatch(setLoading(SEARCH.ATTEMPT))
        axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}`,
            params: {
                apiKey: `${process.env.REACT_APP_API_KEY}`,
                ...params
            }
        })
            .then(result => {
                dispatch(setSuccess(SEARCH.SUCCEED, result))
            })
            .catch(error => {
                dispatch(setFail(SEARCH.FAILED, error))
            })
    }
}

export default searchAction