const stateDefault = {
    dsPhim: [],
    tatCaThongTinHeThongRap: [],
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM_ACTION': {
            state.dsPhim = action.dsPhim;
            return { ...state }
        }
        case 'TAT_CA_THONG_TIN_HE_THONG_RAP': {
            state.tatCaThongTinHeThongRap = action.tatCaThongTinHeThongRap
            return { ...state }
        }


        default: return { ...state }
    }
}
