const stateDefault = {
    tatCaThongTinHeThongRap: [],
}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'TAT_CA_THONG_TIN_HE_THONG_RAP': {
            state.tatCaThongTinHeThongRap = action.tatCaThongTinHeThongRap
            return { ...state }
        }


        default: return { ...state }
    }
} 