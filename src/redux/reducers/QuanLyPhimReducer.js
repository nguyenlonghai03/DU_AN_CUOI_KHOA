const stateDefault = {
    dsPhim: [],
    thongTinHeThongRap: [],
    cumRapTheoHeThong: [],

    phimTheoCumRap: [],
    thongTinPhongVe: {},
    danhSachGheDangDat: [],
    chiTietPhim: {},
    layTatCa: [],
    phimTheoHeThong: [],


    danhSachNguoiDung: [],
    danhSachPhimAdmin: []


}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM_ACTION': {
            state.dsPhim = action.dsPhim;
            return { ...state }
        }
        // case 'LAY_THONG_TIN_HE_THONG_RAP': {
        //     state.thongTinHeThongRap = action.thongTinHeThongRap;
        //     return { ...state }
        // }
        // case 'LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG': {
        //     state.cumRapTheoHeThong = action.cumRapTheoHeThong;
        //     return { ...state }
        // }
        // case 'LAY_PHIM_THEO_CUM_RAP': {
        //     // console.log("ACCCTION", action)
        //     state.phimTheoHeThongRap = action.phimTheoHeThongRap[0].lstCumRap
        //     // state.phimTheoCumRap = action.phimTheoHeThongRap[0].lstCumRap[0].danhSachPhim
        //     return { ...state }
        // }


        // case 'LAY_PHIM_THEO_MA_CUM_RAP': {
        //     let item = state.phimTheoHeThongRap.find(item => item.maCumRap === action.maCumRap);
        //     state.phimTheoCumRap = item?.danhSachPhim;
        //     return { ...state }
        // }



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





        case 'LAY_CHI_TIET_PHIM': {
            // console.log("ACTION", action.chiTietPhim)
            state.chiTietPhim = action.chiTietPhim;
            return { ...state }
        }
        case 'LAY_TAT_CA': {
            state.layTatCa = action.layTatCa
            state.phimTheoHeThong = action.layTatCa[0].lstCumRap[0].danhSachPhim
            return { ...state }
        }
        case 'LAY_PHIM_THEO_HE_THONG': {


            // console.log("ACCCTIN", action)

            state.layTatCa.forEach((item, index) => {
                if (item.maHeThongRap === action.maHeThongRap) {
                    state.phimTheoHeThong = state.layTatCa[index].lstCumRap[0].danhSachPhim
                }
            })

            return { ...state }



        }
        case 'LAY_PHIM_THEO_CUM': {
            // console.log("ACTION", action)
            state.layTatCa.forEach((item, vitri) => {
                item.lstCumRap.forEach((cum, index) => {
                    if (cum.maCumRap === action.maCum) {
                        state.phimTheoHeThong = state.layTatCa[vitri].lstCumRap[index].danhSachPhim
                    }
                })
            })
            return { ...state }
        }



        // Phần này của admin

        case 'LAY_DANH_SACH_NGUOI_DUNG': {
            state.danhSachNguoiDung = action.danhSachNguoiDung;
            return { ...state }
        }

        case 'TIM_KIEM_NGUOI_DUNG': {
            state.danhSachNguoiDung = action.timKiem
            return { ...state }

        }

        case 'LAY_DANH_SACH_PHIM_ADMIN': {
            // console.log("ACC", action)
            state.danhSachPhimAdmin = action.danhSachPhimAdmin;
            return { ...state }
        }





        default: return { ...state }
    }
}
