import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'

import thunk from 'redux-thunk'
import reducers from '../reducers'

export const store = configureStore({
    reducer: reducers,
    middleware: [thunk]
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;