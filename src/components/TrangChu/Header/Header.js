import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./hideHeader";
import * as $ from "jquery";
import { NavLink } from "react-router-dom";
import Modal2 from './Modal2';
import DangKy from '../../../pages/TrangChu/DangKy'
import DangNhap from '../../../pages/TrangChu/DangNhap'


const DangKyWithModal = new Modal2('Đăng ký', DangKy)
const DangNhapWithModal = new Modal2('Đăng nhập', DangNhap)

export default function Header() {
	let userLogin = useSelector(state => state.QuanLyNguoiDungReducer.userLogin);

	const [stateee, setStateee] = useState('DK');
	const renderModal = () => {
		if (stateee === 'DK') {
			return DangKyWithModal;
		} else {
			return DangNhapWithModal;
		}
	}

	return (
		<>
			<nav className="sth navbar navbar-expand-sm text-light">
				<div className="container justify-content-between">
					<a className="navbar-brand " href="/">
						<img
							id="myImage"
							src="https://iconape.com/wp-content/files/di/283183/png/toho-cinemas-logo.png"
							alt="LOGO"
						/>
						<span style={{ color: "#db4444", fontWeight: "bold" }}> TOHO</span>
						<span style={{ color: "#9d9d9d", fontWeight: "bold" }}> CINEMAS</span>
					</a>
					<button
						className="navbar-toggler d-lg-black"
						type="button"
						data-toggle="collapse"
						data-target="#collapsibleNavId"
						aria-controls="collapsibleNavId"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon" />
					</button>
					<div className="collapse navbar-collapse" id="collapsibleNavId">
						<ul className="navbar-nav mx-auto mt-2 mt-lg-0">
							<li className="nav-item active">
								<NavLink className="nav-link" to="/">
									Trang Chủ
								</NavLink>
							</li>

							<li className="nav-item">
								<NavLink className="nav-link" to="/thongtincanhan">
									Thông tin cá nhân
							</NavLink>
							</li>
							{/* <li className="nav-item">
								<NavLink className="nav-link" to="/loginlogout">
									Login
							</NavLink>
							</li> */}
						</ul>

						{/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Đăng Nhập
          </button>
        </form> */}
					</div>
					<div class="btn__group">
						{userLogin.taiKhoan ? <button className="btn btn-primary m-2 btn__login"><i class="fa fa-user-circle" aria-hidden="true"></i> Hello {userLogin.taiKhoan}!</button> :
							<NavLink className="btn btn-primary m-2 btn__login" to="/loginlogout">Đăng nhập</NavLink>
						}
						{/* <button className="btn btn-danger mr-2 btn__register" data-toggle="modal" data-target="#modelId2" onClick={() => {
							setStateee('DK')
						}}>Đăng ký</button> */}

						{/* <NavLink className="nav-link" to="/loginlogout">
									<button className="btn btn-primary m-2 btn__login"><i class="fa fa-user-circle" aria-hidden="true"></i></button>
							</NavLink> */}
					</div>
				</div>
			</nav>
			{renderModal()}
		</>
	);
}
