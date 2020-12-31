import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { dangKyApi } from '../../redux/actions/QuanLyNguoiDungActions';

export default function DangKy() {

    const dispatch = useDispatch();
    const [state, setState] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: 'GP03',
        maLoaiNguoiDung: 'KhachHang',
        hoTen: ''
    })

    const handleChange = e => {
        const { name, value } = e.target;


        // Validation ở đây

        setState({
            ...state,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var objLogout = state;
        // console.log("obj", objLogout)

        dispatch(dangKyApi(objLogout))
    }



    return (
        <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            <h2 className="titleF">Sign up</h2>
            <div className="input-fieldF">
                <i className="fas fa-user" />
                <input name="taiKhoan" type="text" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-lock" />
                <input name="matKhau" type="password" placeholder="Password" onChange={handleChange} />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-envelope" />
                <input name="email" type="email" placeholder="Email" onChange={handleChange} />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-phone" />
                <input name="soDt" type="text" placeholder="Phone number" onChange={handleChange} />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-user" />
                <input name="hoTen" type="text" placeholder="Full name" onChange={handleChange} />
            </div>
            <input type="submit" className="btnF" defaultValue="Sign up" />
            <p className="social-textF">Or Sign up with social platforms</p>
            <div className="social-mediaF">
                <a href="#" className="social-iconF">
                    <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social-iconF">
                    <i className="fab fa-twitter" />
                </a>
                <a href="#" className="social-iconF">
                    <i className="fab fa-google" />
                </a>
                <a href="#" className="social-iconF">
                    <i className="fab fa-linkedin-in" />
                </a>
            </div>
        </form>
    )
}
