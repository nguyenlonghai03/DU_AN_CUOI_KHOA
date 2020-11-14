const stateDefault = {
    dsPhim: [],
    tatCaThongTinHeThongRap: [],
    danhSachPhim: [
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 16099, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T10:10:00", giaVe: 75000 },
                { maLichChieu: 16100, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T12:10:00", giaVe: 75000 },
                { maLichChieu: 16101, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T14:10:00", giaVe: 75000 },
                { maLichChieu: 16102, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T16:10:00", giaVe: 75000 },
                { maLichChieu: 16103, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T18:10:00", giaVe: 75000 },
                { maLichChieu: 16104, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T20:10:00", giaVe: 75000 }
            ], maPhim: 1314, tenPhim: "13 reasons why", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/13-reasons-why_gp01.jpg"
        },
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 40064, maRap: "465", tenRap: "Rạp 5", ngayChieuGioChieu: "2019-09-07T10:10:00", giaVe: 100000 },
                { maLichChieu: 40069, maRap: "465", tenRap: "Rạp 5", ngayChieuGioChieu: "2019-01-01T10:10:00", giaVe: 99000 },
                { maLichChieu: 40070, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2019-01-01T00:10:00", giaVe: 77000 }
            ], maPhim: 1344, tenPhim: "13 reason why", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/13-reason-why_gp01.jpg"
        },
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 40261, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2910-02-01T03:03:03", giaVe: 75000 }
            ], maPhim: 2528, tenPhim: "Mắt Biếc", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/mat-biec_gp01.jpg"
        },
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 40264, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2020-03-14T12:00:00", giaVe: 100000 }
            ], maPhim: 2602, tenPhim: "Superman", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/superman_gp01.gif"
        },
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 40268, maRap: "463", tenRap: "Rạp 3", ngayChieuGioChieu: "2020-03-05T12:00:00", giaVe: 75000 },
                { maLichChieu: 40283, maRap: "466", tenRap: "Rạp 6", ngayChieuGioChieu: "2020-03-05T19:01:00", giaVe: 75000 }
            ], maPhim: 2603, tenPhim: "Cào cậu bây giờ, ở đó mà edit phim tớ đi", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/cao-cau-bay-gio-o-do-ma-edit-phim-to-di_gp01.jpg"
        },
        {
            lstLichChieuTheoPhim: [
                { maLichChieu: 40278, maRap: "467", tenRap: "Rạp 7", ngayChieuGioChieu: "2020-08-24T05:30:00", giaVe: 90000 }
            ], maPhim: 1329, tenPhim: "Dao Kinh Hoang", hinhAnh: "http://movie0706.cybersoft.edu.vn/hinhanh/dao-kinh-hoang_gp01.jpg"
        }
    ],
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
        case 'LAY_DANH_SACH_PHIM_THEO_MA_CUM_RAP': {
            console.log("ACTION", action)
            let danhSachPhimUpdate = [...state.danhSachPhim];
            let maCumRapData = action.data.map((heThongRap, index) => {
                return heThongRap.lstCumRap.map((cumRap, index) => {
                    return cumRap.maCumRap;
                })
            })

            let maTungCum = maCumRapData.map((cum, index) => {
                return cum
            })
            for (let item of maTungCum) {
                for (let maCum of item) {
                    if (action.maCumRap === maCum) {
                        action.data.map((heThongRap, index) => {
                            return heThongRap.lstCumRap.map((cumRap, index) => {
                                if (cumRap.maCumRap === maCum) {
                                    console.log("GIDAY", cumRap.danhSachPhim)
                                    danhSachPhimUpdate = cumRap.danhSachPhim;
                                    console.log("danhSachPhimUpdate", danhSachPhimUpdate)
                                    return danhSachPhimUpdate;

                                }
                            })
                        })
                    }
                }
            }
            state.danhSachPhim = danhSachPhimUpdate;
            // console.log(state.danhSachPhim)
            return { ...state }




        }


        default: return { ...state }
    }
}
