

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { capNhatNguoiDungApi } from '../../redux/actions/QuanLyNguoiDungActions';

export default function ModalCapNhatNguoiDung() {
    const dispatch = useDispatch();


    // const { hoTen } = useSelector(state => state.QuanLyNguoiDungReducer.nguoiDungCapNhat);

    const { stateForm } = useSelector(state => state.QuanLyNguoiDungReducer);
    // let HOTEN = hoTen;



    const handleChange = (e) => {
        const { name, value } = e.target;

        // Xử lý value, tạo ra values mới và thay đổi bên trong nó
        let newValues = { ...stateForm.values };
        newValues[name] = value;
        console.log("NEW", newValues)

        let action = {
            type: 'HANDLE_CHANGE_INPUT',
            newState: {
                values: newValues
            }
        }
        dispatch(action);
        // ==================

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(capNhatNguoiDungApi(stateForm.values))

    }

    return (

        <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Cập nhật người dùng</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row m-3 form-group">
                                <div className="col">
                                    <label>Tài khoản</label>
                                    <input type="text" value={stateForm.values?.taiKhoan} name="taiKhoan" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label>Họ tên</label>

                                    <input type="text" value={stateForm.values?.hoTen} name="hoTen" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row m-3 form-group">
                                <div className="col">
                                    <label>Mật khẩu</label>

                                    <input type="text" value={stateForm.values?.matKhau} name="matKhau" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label>Email</label>

                                    <input type="text" value={stateForm.values?.email} name="email" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col">
                                    <label>Số điện thoại</label>

                                    <input type="text" value={stateForm.values?.soDt} name="soDt" className="form-control" onChange={handleChange} />
                                </div>
                                <div className="col">
                                    <label>Mã loại người dùng</label>

                                    <select name="maLoaiNguoiDung" value={stateForm.values?.maLoaiNguoiDung} className="form-control" onChange={handleChange}>
                                        <option>
                                            Loại người dùng
                                        </option>
                                        <option value="KhachHang">
                                            Khách hàng
                                        </option>
                                        <option value="QuanTri">
                                            Quản trị
                                        </option>
                                    </select>
                                </div>

                            </div>
                            <div>
                                <div className="col-3">
                                    <label>Mã nhóm</label>
                                    <input type="text" value={stateForm.values?.maNhom} name="maNhom" className="form-control" onClick={handleChange} />
                                </div>
                                <div className="col-3">
                                    <button type="submit" className="btn btn-success ml-3">Lưu</button>
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

