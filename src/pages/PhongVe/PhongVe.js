import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layThongTinPhongVe } from '../../redux/actions/QuanLyPhimActions';


export default function PhongVe(props) {

    let thongTinPhongVe = useSelector(state => state.QuanLyPhimReducer.thongTinPhongVe);
    let danhSachGheDangDat = useSelector(state => state.QuanLyPhimReducer.danhSachGheDangDat);
    const dispatch = useDispatch();


    useEffect(async () => {
        //lấy tham so lich chieu tu api
        let maLichChieu = props.match.params.maLichChieu;

        //Gọi action kết nối api lấy dữ liệu lịch chiếu về
        dispatch(await layThongTinPhongVe(maLichChieu));

    }, []);

    console.log('thongTinPhongVe', thongTinPhongVe);


    return (
        <div className="container-fluid mt-5 bg-light">
            <div className="row">
                <div className="col-8 text-center">
                    {/* Thong tin Ghe */}
                    <div className="manHinh bt-2 mb-2">
                        <img src="https://tix.vn/app/assets/img/icons/screen.png" alt="manHinh" />
                    </div>
                    <div className="danhSachGhe">
                        {thongTinPhongVe.danhSachGhe?.map((ghe, index) => {
                            let classGheVip = (ghe.loaiGhe === 'Vip') ? 'gheVip' : '';
                            let classGheDaDat = (ghe.daDat === true) ? 'gheDaDat' : '';
                            let textG = (ghe.daDat === true) ? 'x' : ghe.stt;
                            let disabled = (ghe.daDat === true) ? 'disabled' : '';

                            //ghe dang dat
                            let indexGheDD = danhSachGheDangDat.findIndex(ghedd => ghedd.maGhe === ghe.maGhe);
                            let classGheDangDat = (indexGheDD !== -1) ? 'gheDangDat' : '';

                            return <>
                                <button onClick={() => {
                                    dispatch({
                                        type: 'DAT_GHE',
                                        gheDangDat: {
                                            maGhe: ghe.maGhe,
                                            giaVe: ghe.giaVe,
                                            stt: ghe.stt,
                                        }
                                    });
                                }} disabled={disabled} className={`btn ghe ${classGheVip} ${classGheDaDat} ${classGheDangDat}`}>{textG}</button>
                                {((index + 1) % 16 === 0) ? <br /> : ''}
                            </>
                        })}
                    </div>

                </div>
                <div className="col-4">
                    {/* THong tin Phim */}
                    <div className="display-4 text-center">{danhSachGheDangDat.reduce((tongtien, gheDangDat, index) => {
                        return tongtien += gheDangDat.giaVe;
                    }, 0).toLocaleString()} đ</div>
                    <hr />
                    <div className="text-center">
                        <img src={thongTinPhongVe.thongTinPhim?.hinhAnh} alt={thongTinPhongVe.thongTinPhim?.tenPhim} style={{ width: 100 }} className="img-fluid" />
                    </div>
                    <h1>{thongTinPhongVe.thongTinPhim?.tenPhim}</h1>
                    <p>{thongTinPhongVe.thongTinPhim?.tenCumRap} - {thongTinPhongVe.thongTinPhim?.tenRap}</p>
                    <p>{thongTinPhongVe.thongTinPhim?.ngayChieu} - {thongTinPhongVe.thongTinPhim?.gioChieu}</p>
                    <hr />
                    <div>Ghế: {danhSachGheDangDat?.map((ghe, index) => {
                        return <span key={index}>
                            {ghe.stt},
                        </span>
                    })}</div>
                </div>
            </div>
        </div >
    )
}
