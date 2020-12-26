import React from "react";
import "./assets/css/main.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
import { HomeTemplate } from "./templates/HomeTemplate";
import DangNhap from "./pages/TrangChu/DangNhap";
import DangKy from "./pages/TrangChu/DangKy";
import TrangChu from "./pages/TrangChu/TrangChu";
import { UserTemplate } from "./templates/UserTemplate";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhongVe from "./pages/PhongVe/PhongVe";
import ThongTinCaNhan from "./pages/ThongTinCaNhan/ThongTinCaNhan";
import AdminTemplate from "./templates/AdminTemplate";
import QuanLyNguoiDung from "./components/Admin/QuanLyNguoiDung";
import ThemMoiNguoiDung from "./components/Admin/ThemMoiNguoiDung";
import ThemPhim from "./components/Admin/ThemPhim";
import QuanLyPhim from "./components/Admin/QuanLyPhim";
import Login from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/home" Component={TrangChu} />
        <HomeTemplate
          exact
          path="/chitietphim/::maPhim"
          Component={ChiTietPhim}
        />
        <HomeTemplate
          exact
          path="/thongtincanhan"
          Component={ThongTinCaNhan}
        />
        <HomeTemplate exact path="/phongve/:maLichChieu" Component={PhongVe} />

        <HomeTemplate exact path="/" Component={TrangChu} />

        <UserTemplate
          exact
          path="/dangnhap"
          Component={DangNhap}
        ></UserTemplate>
        <UserTemplate exact path="/dangky" Component={DangKy}></UserTemplate>

        {/* <Route></Route> */}
        <AdminTemplate exact path="/admin/quanlynguoidung" Component={QuanLyNguoiDung} />
        <AdminTemplate exact path="/admin/themnguoidung" Component={ThemMoiNguoiDung} />
        <AdminTemplate exact path="/admin/quanlyphim" Component={QuanLyPhim} />
        <AdminTemplate exact path="/admin/themphim" Component={ThemPhim} />



        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/" component={TrangChu}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
