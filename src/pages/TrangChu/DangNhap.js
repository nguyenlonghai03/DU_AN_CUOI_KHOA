import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { dangNhapAction } from "../../redux/actions/QuanLyNguoiDungActions";

export default function DangNhap(props) {
  const dispatch = useDispatch();
  const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" });

  const handleChange = (e) => {
    let { value, name } = e.target;
    // Thay đổi giá trị thuộc tính đang onchange
    let newUserLogin = { ...userLogin, [name]: value };
    // Set lại state của  userLogin = Giá trị mới
    setUserLogin(newUserLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //Chặn sự kiện reload browser
    dispatch(dangNhapAction(userLogin));

    if (
      userLogin.taiKhoan === "cybersoft" &&
      userLogin.matKhau === "cybersoft"
    ) {
      //CHuyển về home
      alert("Đăng nhập thành công !!!");
      props.history.push("/");
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3 className="display-4">ĐĂNG NHẬP</h3>
      <div className="form-group">
        <p>Tài Khoản</p>
        <input
          className="form-control"
          name="taiKhoan"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <p>Mật Khẩu</p>
        <input
          className="form-control"
          type="password"
          name="matKhau"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <button className="btn btn-success" type="submit">
          Đăng Nhập
        </button>
      </div>
    </form>
  );
}
