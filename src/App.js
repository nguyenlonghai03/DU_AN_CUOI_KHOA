import React from "react";
import "./assets/css/main.css";
import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import ChiTietPhim from "./pages/ChiTietPhim/ChiTietPhim";
// import TrangChu from "./pages/TrangChu/TrangChu";
import { HomeTemplate } from "./templates/HomeTemplate";
import DangNhap from "./pages/TrangChu/DangNhap";
import DangKy from "./pages/TrangChu/DangKy";
import TrangChu from "./pages/TrangChu/TrangChu";
import { UserTemplate } from "./templates/UserTemplate";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <HomeTemplate exact path="/home" Component={TrangChu} />
        <HomeTemplate exact path="/chitietphim" Component={ChiTietPhim} />

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
