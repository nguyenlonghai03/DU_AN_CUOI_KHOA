import Axios from 'axios'
import Swal from 'sweetalert2';
import { ACCESSTOKEN } from '../../util/Config';

export const layDanhSachPhimApiAction = () => {
    return dispatch => {
        //action này trả về hàm có tham số dispatch
        var promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
            method: 'GET'
        });
        //Thành công lấy dữ liệu trả về set lại state dsPhim
        promise.then((res) => {
            dispatch({
                type: 'LAY_DANH_SACH_PHIM_ACTION',
                dsPhim: res.data
            })
        })
        //Thất bại console.log(lỗi)
        promise.catch((error) => {
            console.log(error.response.data);
        })
    }
}

export const layThongTinHeThongRapApi = async () => {
    return async dispatch => {
        try {
            let { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinHeThongRap`,
                method: 'GET'
            })
            if (status === 200) {
                dispatch({
                    type: 'LAY_THONG_TIN_HE_THONG_RAP',
                    thongTinHeThongRap: data
                })
            }
            // console.log("THONG TIN HE THONG RAP", data)
        } catch (err) {
            console.log(err)
        }
    }
}


export const layThongTinCumRapTheoHeThongApi = (maHeThongRap) => {
    return dispatch => {
        let promise = Axios({
            url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
            method: 'GET'
        })
        promise.then(res => {
            dispatch({
                type: 'LAY_THONG_TIN_CUM_RAP_THEO_HE_THONG',
                cumRapTheoHeThong: res.data
            })


        }).catch(err => {
            console.log(err.response.data)
        })



    }
}

export const layDanhSachPhimTheoCumRapApi = async (maHeThongRap) => {
    console.log("maHeThongRap", maHeThongRap)
    return async dispatch => {
        try {
            let { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP03`,
                method: 'GET'
            })
            // console.log("DANH SACH PHIM THEO CUM", data[0].lstCumRap[0].danhSachPhim)

            if (status === 200) {
                dispatch({
                    type: 'LAY_PHIM_THEO_CUM_RAP',
                    // phimTheoCumRap: data[0].lstCumRap[0].danhSachPhim
                    phimTheoHeThongRap: data
                })
            }
            console.log("DATAAAA", data)
        } catch (err) {
            console.log(err)
        }
    }
}

export const layPhimTheoCumRap = (maCumRap) => {
    return dispatch => {
        dispatch({
            type: 'LAY_PHIM_THEO_MA_CUM_RAP',
            maCumRap
        })
    }
}

export const layThongTinPhongVe = async (maLichChieu) => {

    return async (dispatch) => {
        try {

            const { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
                method: 'GET'
            })

            if (status === 200) {
                dispatch({
                    type: 'THONG_TIN_PHONG_VE',
                    thongTinPhongVe: data
                })
            }

        } catch (err) {
            console.log(err);

        }
    }
}


export const layChiTietPhimApi = async (maPhim) => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
                method: 'GET'
            })
            if (status === 200) {
                dispatch({
                    type: 'LAY_CHI_TIET_PHIM',
                    chiTietPhim: data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}




export const layTatCaApi = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03',
                method: 'GET'
            })
            if (status === 200) {
                dispatch({
                    type: 'LAY_TAT_CA',
                    layTatCa: data
                })
            }
            console.log("DATANE", data)
        } catch (err) {
            console.log(err)
        }
    }
}





// ============= ADMIN



export const layDanhSachPhimAdminApi = async () => {
    return async (dispatch) => {
        try {
            const { data, status } = await Axios({
                url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03',
                method: 'GET'
            })
            if (status === 200) {
                dispatch({
                    type: 'LAY_DANH_SACH_PHIM_ADMIN',
                    danhSachPhimAdmin: data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}


export const ThemPhimUploadHinhApi = (formData) => {
    console.log("Form", formData)
    return dispatch => {
        let promise = Axios({
            url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
            method: 'POST',
            data: formData
        })
        console.log("PROMISE", promise)
        promise.then(res => {
            console.log("RES", res)
            alert('Thêm thành công')
        });
        promise.catch(err => {
            console.log(err.response.data);
        })
    }
}


// action datve
export const datVeApiAction = async (thongTinVe) => {

    return async (dispatch) => {
        try {

            let { data, status } = await Axios({
                url: `https://movie0706.cybersoft.edu.vn/api/QuanLyDatVe/DatVe`,
                method: 'POST',
                data: thongTinVe,
                headers: { 'Authorization': 'Bearer ' + localStorage.getItem(ACCESSTOKEN) }
            })

            dispatch(await layThongTinPhongVe(thongTinVe.maLichChieu));
            dispatch({ type: 'DAT_VE_THANH_CONG' });

            Swal.fire('Thông báo', 'Đặt vé thành công', 'success');


        } catch (err) {
            console.log('adfasd', err.response.data);
            Swal.fire('Thông báo', 'Đặt vé thất bại', 'error');

        }

    }
}
