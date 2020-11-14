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

export const layTatCaThongTinHeThongRapApi = async () => {
    return async dispatch => {
        try {
            let { data, status } = await Axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
                method: 'GET'
            })
            if (status === 200) {
                // console.log("KQ", data, status)
                dispatch({
                    type: 'TAT_CA_THONG_TIN_HE_THONG_RAP',
                    tatCaThongTinHeThongRap: data
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
}
export const layDanhSachPhimTheoMaCumRapApi = (maCumRap) => {
    return dispatch => {
        let promise = Axios({
            url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP03`,
            method: 'GET'
        })
        promise.then(res => {
            dispatch({
                type: 'LAY_DANH_SACH_PHIM_THEO_MA_CUM_RAP',
                data: res.data,
                maCumRap

            })
        }).catch(err => {
            console.log(err.response.data)
        })

    }

}
