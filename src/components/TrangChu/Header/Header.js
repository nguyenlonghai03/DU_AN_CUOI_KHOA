import React, {useState} from "react";
import "./hideHeader";
import * as $ from "jquery";
import { NavLink } from "react-router-dom";
import Modal2 from './Modal2';
import DangKy from '../../../pages/TrangChu/DangKy'
import DangNhap from '../../../pages/TrangChu/DangNhap'


const DangKyWithModal = new Modal2('Dang Ky', DangKy)
const DangNhapWithModal = new Modal2('Dang Ky', DangNhap)

export default function Header() {

  const [stateee, setStateee] = useState('DK');
  const renderModal = () => {
    if(stateee === 'DK') {
      return DangKyWithModal;
    } else {
      return DangNhapWithModal;
    }
  }

  return (
    <nav className="sth navbar navbar-expand-sm text-light">
      <a className="navbar-brand " href="#">
        <img
          id="myImage"
          src="https://iconape.com/wp-content/files/di/283183/png/toho-cinemas-logo.png"
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
      <div className="collapse navbar-collapse ml-5" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/lichchieu">
              Lịch chiếu <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/cumrap">
              Cụm rạp
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sukien">
              Sự kiện
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/hotro">
              Hỗ trợ
            </NavLink>
          </li>
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


        <button className="btn btn-danger m-2" data-toggle="modal" data-target="#modelId2" onClick={() => {
                setStateee('DK')
            }}>Dang ky</button>
        <button className="btn btn-primary m-2" data-toggle="modal" data-target="#modelId2" onClick={() => {
                setStateee('DN')
            }}>Dang nhap</button>
        {renderModal()}
      </div>
    </nav>
  );
}
