const stateDefault = {
    mangPhim: [
        {maPhim:1, tenPhim:'Kiều',hinhAnh:'https://picsum.photos',moTa:'Phim được chiếu tại tất cả các rạp trên toàn quốc'},
        {maPhim:2, tenPhim:'Batman',hinhAnh:'https://picsum.photos',moTa:'phim đang được chiếu tại tất cả các rạp trên toàn quốc'}
    ]
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {

    switch (action.type) {
        default: return {...state}
    }
}