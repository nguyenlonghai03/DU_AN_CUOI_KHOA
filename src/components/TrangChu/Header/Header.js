import React from "react";
import "./hideHeader";
import * as $ from "jquery";
import { NavLink } from "react-router-dom";

export default function Header() {
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
            <NavLink className="nav-link" to="/thongtincanhan">
              Thông tin cá nhân
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
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
      </div>
    </nav>
  );
}
