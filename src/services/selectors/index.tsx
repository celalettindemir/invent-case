import { RootState } from "../store";

export const selectDetail = (state: RootState) => state.detail
export const selectSearch = (state: RootState) => state.search
export const selectFilter = (state: RootState) => state.filter