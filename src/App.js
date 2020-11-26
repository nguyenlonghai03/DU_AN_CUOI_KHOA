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
        <HomeTemplate exact path="/phongve/:maLichChieu" Component={PhongVe} />

        <HomeTemplate exact path="/" Component={TrangChu} />

        <UserTemplate
          exact
          path="/dangnhap"
          Component={DangNhap}
        ></UserTemplate>
        <UserTemplate exact path="/dangky" Component={DangKy}></UserTemplate>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
