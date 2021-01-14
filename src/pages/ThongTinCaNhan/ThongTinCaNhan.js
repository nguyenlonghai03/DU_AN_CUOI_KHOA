import React, { Fragment, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/Config'
import { useDispatch, useSelector } from 'react-redux'
import { layThongTinNguoiDungApi, layThongTinTaiKhoanApi } from '../../redux/actions/QuanLyNguoiDungActions'
import moment from 'moment'

export default function ThongTinCaNhan(props) {
    const { thongTinTaiKhoan } = useSelector(state => state.QuanLyNguoiDungReducer)
    const dispatch = useDispatch();
    const taiKhoan = JSON.parse(localStorage.getItem(USER_LOGIN));

    useEffect(async () => {
        dispatch(await layThongTinTaiKhoanApi(taiKhoan))
    }, [])

    if (localStorage.getItem(USER_LOGIN)) {



        const renderThongTinTaiKhoan = () => {
            return <div className="p-4" style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                <p>Họ tên: {thongTinTaiKhoan.hoTen} </p>
                <p>Email: {thongTinTaiKhoan.email}</p>
                <p>Số điện thoại: {thongTinTaiKhoan.soDT}</p>
                <p>Tài khoản: {thongTinTaiKhoan.taiKhoan}</p>
                <p>Mật khẩu: {thongTinTaiKhoan.matKhau}</p>
            </div>
        }

        console.log("TT", thongTinTaiKhoan.thongTinDatVe)

        const renderPhimDaDat = () => {
            return thongTinTaiKhoan.thongTinDatVe?.map((thongTin, index) => {
                return <div className="col-12 m-3 text-white"  >
                    <div className="row" style={{ backgroundColor: 'black', borderRadius: '20px' }}>
                        <div className="col-8 pl-5" >
                            <p >Tên phim: {thongTin.tenPhim}</p>
                            <p >Thời lượng: {thongTin.thoiLuongPhim} phút</p>
                            <p>Ngày đặt: {moment(thongTin.ngayDat).format('MMMM Do YYYY, h:mm:ss a')}</p>
                            <p>Giá vé: {thongTin.giaVe} VND</p>
                        </div>
                    </div>
                </div>
            })
        }
        return (
            <Fragment>
                <div style={{ marginTop: '100px' }} className="container" data-spy="scroll" >
                    <main >
                        {/* <h1>CSS Tabs Revisited</h1> */}
                        <input id="radio1" type="radio" name="css-tabs" defaultChecked />
                        <input id="radio2" type="radio" name="css-tabs" />
                        <div id="tabs" className="d-flex">
                            <label id="tab1" htmlFor="radio1">Home</label>
                            <label id="tab2" htmlFor="radio2" >Services</label>
                        </div>
                        <div id="content" >
                            <section id="content1" className="mt-2">
                                <h1 style={{ color: "green" }}>Thông tin phim đã đặt</h1>
                                <div className="row" style={{ position: 'relative', maxWidth: '800px', height: '400px', overflowX: 'hidden' }}>
                                    {renderPhimDaDat()}
                                </div>
                            </section>
                            <section id="content2" className="text-white">
                                <h1 style={{ color: "green" }}>Thông tin cá nhân</h1>
                                {renderThongTinTaiKhoan()}
                            </section>
                        </div>

                    </main>
                </div>

            </Fragment>

        )



    } else {
        alert('Vui lòng đăng nhập để vào trang này !')
        return <Redirect to="/loginlogout" />
    }

}
