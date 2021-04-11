import {combineReducers,createStore} from 'redux';
import { QuanLyPhimReducer } from './QuanLyReducer'

const rootReducer = combineReducers({
    //Khai báo các state của ứng dụng
    QuanLyPhimReducer
})

export const store = createStore(rootReducer);