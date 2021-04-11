import React from 'react';
import {connect,useSelector} from 'react-redux';


export default function TrangChu(props) {

    const mangPhim = useSelector(state => state.QuanLyPhimReducer.mangPhim)
    console.log('mangphim',mangPhim);
    console.log('props',props)

    return (
        <div className="container">
            <h3>Trang chủ</h3>
        </div>
    )
}

