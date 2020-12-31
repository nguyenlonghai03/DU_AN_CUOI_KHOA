import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachNguoiDung, suaNguoiDung, timKiemNguoiDung, xoaNguoiDungApi } from '../../redux/actions/QuanLyNguoiDungActions';
import { NavLink } from 'react-router-dom'
import ModalCapNhatNguoiDung from './ModalCapNhatNguoiDung';



const handleModalCapNhat = () => new ModalCapNhatNguoiDung();
export default function QuanLyNguoiDung() {


    const { danhSachNguoiDung } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();

    const renderModalCapNhat = () => {
        return handleModalCapNhat()
    }

    useEffect(async () => {
        dispatch(await layDanhSachNguoiDung())
    }, [])
    console.log("danhSach", danhSachNguoiDung);

    const handleTimKiem = () => {
        let valueInputTag = document.getElementById('inputTimKiem').value;
        console.log("VALUE", valueInputTag)
        return valueInputTag;
    }





    return (
        <>
            <div className="d-flex my-2">
                <NavLink to="/admin/themnguoidung" className="btn btn-success ml-4">Thêm người dùng</NavLink>
                <input id="inputTimKiem" className="form-control my-2 mx-2" type="text" style={{ width: '600px', height: '30px' }}></input>
                <i className="fa fa-search my-3 mx-2" onClick={async () => {
                    // await handleTimKiem();
                    dispatch(await timKiemNguoiDung(handleTimKiem()));
                }} type="button"></i>
                <button className="btn btn-primary" onClick={async () => {
                    dispatch(await layDanhSachNguoiDung())
                }}>Load toàn bộ danh sách</button>

            </div>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Mã loại người dùng</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                {danhSachNguoiDung.map((nguoiDung, index) => {
                    return <tbody key={index}>
                        <tr>
                            <td>{index + 1}</td>
                            <td>{nguoiDung.taiKhoan}</td>
                            <td>{nguoiDung.matKhau}</td>
                            <td>
                                {/* <span className="dot">
                                <i className="bg-success" />
                      Completed
                    </span> */}
                                {nguoiDung.hoTen}
                            </td>
                            <td>{nguoiDung.email}</td>
                            <td>{nguoiDung.soDt}</td>
                            <td>{nguoiDung.maLoaiNguoiDung}</td>
                            <td>
                                <button className="btn btn-success" data-toggle="modal" data-target="#modelId" onClick={() => {
                                    dispatch(suaNguoiDung(nguoiDung))
                                }}>Sửa</button>
                                <button className="btn btn-danger" onClick={() => {
                                    dispatch(xoaNguoiDungApi(nguoiDung.taiKhoan))
                                }}>Xóa</button>
                            </td>
                        </tr>
                    </tbody>
                })}

            </table>
            {renderModalCapNhat()}
        </>
    )
}



