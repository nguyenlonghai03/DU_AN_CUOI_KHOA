import React from "react";

export default function DangKy() {
  return (
    <div className="container">
      <h3>Đăng Ký</h3>
      <div className="form-group">
        <p>Tài Khoản</p>
        <input className="form-group" name="taiKhoan" />
      </div>
      <div className="form-group">
        <p>Mật Khẩu</p>
        <input className="form-group" name="matKhau" />
      </div>
      <div className="form-group">
        <p>Họ và tên</p>
        <input className="form-group" name="hoTen" />
      </div>
      <div className="form-group">
        <p>Email</p>
        <input className="form-group" name="email" />
      </div>
      <div className="form-group">
        <p>Số điện thoại</p>
        <input className="form-group" name="soDienThoai" />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Đăng ký</button>
      </div>
    </div>
  );
}
