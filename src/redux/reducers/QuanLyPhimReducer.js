const stateDefault = {
    dsPhim: [],
    thongTinHeThongRap: [],
    cumRapTheoHeThong: [],
    phimTheoHeThongRap: [],
    phimTheoCumRap: [],
    thongTinPhongVe: {},
    danhSachGheDangDat: []

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
        case 'THONG_TIN_PHONG_VE': {
            state.thongTinPhongVe = action.thongTinPhongVe
            return { ...state }
        }
        case 'DAT_GHE': {
            let dsGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = dsGheDangDatUpdate.findIndex(ghe => ghe.maGhe === action.gheDangDat.maGhe);
            if (index !== -1) {
                dsGheDangDatUpdate.splice(index, 1);
            } else {
                dsGheDangDatUpdate.push(action.gheDangDat);
            }
            state.danhSachGheDangDat = dsGheDangDatUpdate;
            return { ...state }
        }



        default: return { ...state }
    }
}
