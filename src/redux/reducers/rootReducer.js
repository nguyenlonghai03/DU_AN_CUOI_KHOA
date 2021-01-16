import { combineReducers } from 'redux'
import { QuanLyPhimReducer } from './QuanLyPhimReducer'
import { QuanLyNguoiDungReducer } from './QuanLyNguoiDungReducer'
import LoadingReducer from './LoadingReducer'
export const rootReducer = combineReducers({
    QuanLyPhimReducer,
    QuanLyNguoiDungReducer,
    LoadingReducer
})
