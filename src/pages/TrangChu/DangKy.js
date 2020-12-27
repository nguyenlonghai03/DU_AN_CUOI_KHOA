import React from "react";

export default function DangKy() {
  return (
    <div className="container">
      <div className="form-group">
        <p>Tài Khoản</p>
        <input className="form-control" name="taiKhoan" />
      </div>
      <div className="form-group">
        <p>Mật Khẩu</p>
        <input className="form-control" name="matKhau" />
      </div>
      <div className="form-group">
        <p>Họ và tên</p>
        <input className="form-control" name="hoTen" />
      </div>
      <div className="form-group">
        <p>Email</p>
        <input className="form-control" name="email" />
      </div>
      <div className="form-group">
        <p>Số điện thoại</p>
        <input className="form-control" name="soDienThoai" />
      </div>
      <div className="form-group mt-4">
        <button className="btn btn-success w-100">Đăng ký</button>
      </div>
    </div>
  );
}
