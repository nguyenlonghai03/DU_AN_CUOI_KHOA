import Axios from 'axios'

export const layTatCaThongTinHeThongRapApi = async () => {
    return async dispatch => {
        try {
            let { data, status } = await Axios({
                url: `http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01`,
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