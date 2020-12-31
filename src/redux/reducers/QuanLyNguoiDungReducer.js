const { USER_LOGIN } = require("../../util/Config");

let usLogin = {};


if (localStorage.getItem(USER_LOGIN)) {
    //Lấy userLogin trong storage gán cho state
    usLogin = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const stateDefault = {
    userLogin: usLogin,
    stateForm: {
        values: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            maNhom: 'GP03',
            maLoaiNguoiDung: '',
            hoTen: ''
        }
        // errors: {

        // }
    }
}

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'DANG_NHAP': {
            state.userLogin = action.userLogin
            return { ...state };
        }

        case 'SUA_NGUOI_DUNG': {
            let nguoiDungChinhSua = action.nguoiDungCapNhat;
            state.stateForm.values = {
                ...state.stateForm.values,
                taiKhoan: nguoiDungChinhSua.taiKhoan,
                matKhau: nguoiDungChinhSua.matKhau,
                email: nguoiDungChinhSua.email,
                soDt: nguoiDungChinhSua.soDt,
                maLoaiNguoiDung: nguoiDungChinhSua.maLoaiNguoiDung,
                hoTen: nguoiDungChinhSua.hoTen
            }
            return { ...state }
        }

        case 'HANDLE_CHANGE_INPUT': {
            state.stateForm = { ...action.newState }
            // console.log("state", state.stateForm)
            return { ...state }
        }


        default: return { ...state }
    }
}
