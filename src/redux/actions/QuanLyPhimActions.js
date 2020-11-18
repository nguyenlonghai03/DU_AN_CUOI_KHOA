import Axios from 'axios'

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