import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions'
// import { dangNhapAction } from '../redux/actions/QuanLyNguoiDungAction'

// import { history } from '../../util/history'

export default function DangNhap(props) {
    // console.log("HIS", history)
    const dispatch = useDispatch()

    // console.log('props trang login', props); // props của route

    const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" })
    // console.log(userLogin)
    const handleChange = (e) => {
        let { value, name } = e.target;
        setUserLogin({ ...userLogin, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault(); // Chặn sự kiện reload của browser
        // if (userLogin.taiKhoan === 'cybersoft' && userLogin.matKhau === 'cybersoft') {
        //     // chuyển về home
        //     alert('Đăng nhập thành công');
        //     props.history.push('/trangchu');

        // }
        // 
        // console.log("USE", userLogin)
        dispatch(dangNhapAction(userLogin));
        // console.log(dangNhapAction)

    }


    return (
        <form action="#" className="sign-in-formF" onSubmit={handleSubmit}>
            <h2 className="titleF">Sign in</h2>
            <div className="input-fieldF">
                <i className="fas fa-user" />
                <input name="taiKhoan" type="text" placeholder="Username" onChange={handleChange} />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-lock" />
                <input name="matKhau" type="password" placeholder="Password" onChange={handleChange} />
            </div>
            <input type="submit" value="Login" className="btnF solid" />
            <p className="social-textF">Or Sign in with social platforms</p>
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
