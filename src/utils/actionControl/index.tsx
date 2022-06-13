export const setLoading = (actionType: any) => {
    return {
        type: actionType,
        payload: { isLoading: true }
    }
}

export const setSuccess = (actionType: any, data: any) => {
    return {
        type: actionType,
        payload: { data }
    }
}

export const setFail = (actionType: any, errorMessage: any) => {
    return {
        type: actionType,
        payload: { ...errorMessage }
    }
}