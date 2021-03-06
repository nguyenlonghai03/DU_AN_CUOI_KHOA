import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./hideHeader";
import * as $ from "jquery";
import { NavLink } from "react-router-dom";
import Modal2 from './Modal2';
import DangKy from '../../../pages/TrangChu/DangKy'
import DangNhap from '../../../pages/TrangChu/DangNhap'
import { ACCESSTOKEN, USER_LOGIN } from "../../../util/Config";
import Swal from "sweetalert2";


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

	const dangXuatNe = () => {

		localStorage.removeItem(USER_LOGIN);
		localStorage.removeItem(ACCESSTOKEN);
	}
	return (
		<>
			{/* <nav className="sth navbar navbar-expand-sm text-light">
				<div className="container justify-content-between">
					
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
							

							
							
						</ul>

						
					</div>
					
				</div>
			</nav> */}




			<nav className="navbar navbar-expand-sm navbar-dark bg-primary">

				{/* <button style={{ backgroundColor: "blue" }} className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" /> */}
				<div className="collapse navbar-collapse container" id="collapsibleNavId">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0">
						<li className="nav-item mr-5" >
							<img src="../img/images.png" style={{ width: "50px", height: '50px', borderRadius: '50px' }} />
						</li>
						<li className="nav-item active ml-2 mr-3">
							<NavLink style={{ color: 'white', padding: '0px' }} className="nav-link" to="/">
								Trang Chủ
								</NavLink>
						</li>
						<li className="nav-item">
							<NavLink className="nav-link" style={{ color: 'white', padding: "0px" }} to="/thongtincanhan">
								Thông tin cá nhân
							</NavLink>
						</li>

					</ul>
					<div class="btn__group">
						{userLogin.taiKhoan ?
							<button className="btn btn-primary m-2 btn__login"><i class="fa fa-user-circle" aria-hidden="true"></i> Hello {userLogin.taiKhoan}!</button> :
							<NavLink className="btn btn-primary m-2 btn__login" to="/loginlogout">Đăng nhập</NavLink>
						}
						{userLogin.taiKhoan ? <a className="btn btn-success" onClick={() => { dangXuatNe() }} href="/loginlogout">Đăng xuất</a> : ''}

					</div>

				</div>
			</nav>


			{renderModal()}
		</>
	);
}
