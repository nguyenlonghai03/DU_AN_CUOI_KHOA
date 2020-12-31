import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { themNguoiDungApi } from '../../redux/actions/QuanLyNguoiDungActions';

export default function ThemMoiNguoiDung(props) {
    const dispatch = useDispatch()

    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP03',
        maLoaiNguoiDung: '',
        hoTen: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
        // console.log("State", state)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var objThem = state;
        // console.log("State", objThem)

        dispatch(themNguoiDungApi(objThem))

    }


    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-center mb-5">THÊM NGƯỜI DÙNG</h1>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" name="taiKhoan" className="form-control" placeholder="Tài khoản" onChange={handleChange} />
                </div>
                <div className="col">
                    <input type="text" name="hoTen" className="form-control" placeholder="Họ tên" onChange={handleChange} />
                </div>
            </div>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" name="matKhau" className="form-control" placeholder="Mật khẩu" onChange={handleChange} />
                </div>
                <div className="col">
                    <input type="text" name="email" className="form-control" placeholder="Email" onChange={handleChange} />
                </div>
            </div>
            <div className="row m-3">
                <div className="col">
                    <input type="text" name="soDt" className="form-control" placeholder="Số điện thoại" onChange={handleChange} />
                </div>
                <div className="col">
                    <select name="maLoaiNguoiDung" className="form-control" onChange={handleChange}>
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
            <button type="submit" className="btn btn-success">Thêm người dùng</button>
        </form>


    )
}
