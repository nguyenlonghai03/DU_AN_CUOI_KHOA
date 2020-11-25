const stateDefault = {
    dsPhim: [],
    thongTinHeThongRap: [],
    cumRapTheoHeThong: [],
    phimTheoHeThongRap: [],
    phimTheoCumRap: [],

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM_ACTION': {
            state.dsPhim = action.dsPhim;
            return { ...state }
        }
        case 'LAY_THONG_TIN_HE_THONG_RAP': {
            state.thongTinHeThongRap = action.thongTinHeThongRap;
            return { ...state }
        }
        case 'LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG': {
            state.cumRapTheoHeThong = action.cumRapTheoHeThong;
            return { ...state }
        }
        case 'LAY_PHIM_THEO_CUM_RAP': {
            // console.log("action", action)
            state.phimTheoHeThongRap = action.phimTheoHeThongRap[0].lstCumRap
            // state.phimTheoCumRap = action.phimTheoHeThongRap[0].lstCumRap[0].danhSachPhim
            return { ...state }
        }
        case 'LAY_PHIM_THEO_MA_CUM_RAP': {
            let item = state.phimTheoHeThongRap.find(item => item.maCumRap === action.maCumRap);
            state.phimTheoCumRap = item?.danhSachPhim;
            return { ...state }
        }



        default: return { ...state }
    }
}
