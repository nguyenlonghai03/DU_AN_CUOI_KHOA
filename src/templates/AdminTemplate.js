import React, { Fragment } from 'react'
import $ from 'jquery'
// import '../components/Admin/css/all.css';
import '../components/Admin/css/style.css';
import { NavLink, Route } from 'react-router-dom'
import QuanLyNguoiDung from '../components/Admin/QuanLyNguoiDung';

export default function AdminTemplate(props) {

    let { Component, ...restParam } = props;
    const themeCookieName = 'theme'
    const themeDark = 'dark'
    const themeLight = 'light'
    const body = document.getElementsByTagName('body')[0]

    function getCookie(cname) {
        var name = cname + "="
        var ca = document.cookie.split(';')
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1)
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length)
            }
        }
        return ""
    }

    loadTheme()

    function loadTheme() {
        var theme = getCookie(themeCookieName)
        body.classList.add(theme === "" ? themeLight : theme)
    }
    return (
        <Route {...restParam} render={(propsRoute) => {
            return <>
                <div className="overlay-scrollbar">
                    <div className="navbar ">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <img src="../img/AT-pro-black.png" alt="ATPro logo" className="logo logo-light" />
                                <img src="../img/AT-pro-white.png" alt="ATPro logo" className="logo logo-dark" />
                            </li>
                        </ul>
                        <ul className="navbar-nav nav-right">
                            <li className="nav-item dropdown">
                                <a className="nav-link">
                                    <i className="fas fa-bell " data-toggle="notification-menu" />
                                </a>
                            </li>
                            <li className="nav-item avt-wrapper">
                                <div className="avt dropdown">
                                    <img src="../img/tuat.jpg" alt="User image" className="dropdown-toggle" data-toggle="user-menu" />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="sidebar">
                        <ul className="sidebar-nav">
                            <li className="sidebar-nav-item mt-5">
                                <NavLink to="/admin/quanlynguoidung" className="sidebar-nav-link ">
                                    <div>
                                        <i className="fas fa-tachometer-alt" />
                                    </div>
                                    <span>
                                        Quản lý người dùng
          </span>
                                </NavLink>
                            </li>
                            <li className="sidebar-nav-item">
                                <NavLink to="/admin/themnguoidung" className="sidebar-nav-link">
                                    <div>
                                        <i className="fab fa-accusoft" />
                                    </div>
                                    <span>Thêm mới người dùng</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-nav-item">
                                <NavLink to="/admin/quanlyphim" className="sidebar-nav-link">
                                    <div>
                                        <i className="fas fa-tasks" />
                                    </div>
                                    <span>Quản lý phim</span>
                                </NavLink>
                            </li>
                            <li className="sidebar-nav-item">
                                <NavLink to="/admin/themphim" className="sidebar-nav-link">
                                    <div>
                                        <i className="fas fa-spinner" />
                                    </div>
                                    <span>Thêm mới phim</span>
                                </NavLink>
                            </li>

                            <li className="sidebar-nav-item">
                                <a href="#" className="sidebar-nav-link">
                                    <div>
                                        <i className="fas fa-audio-description" />
                                    </div>
                                    <span>Pellentesque</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="wrapper">
                        <div className="row">
                            <div className="col-12 col-m-12 col-sm-12">
                                <div className="card">
                                    <div className="card-content">
                                        <Component {...propsRoute} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        }} />

    )

}
