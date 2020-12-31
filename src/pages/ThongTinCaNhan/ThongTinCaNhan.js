import React, { Fragment, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/Config'
export default function ThongTinCaNhan(props) {


    if (localStorage.getItem(USER_LOGIN)) {
        return (
            <Fragment>
                <div className="container" data-spy="scroll" >
                    <main >
                        {/* <h1>CSS Tabs Revisited</h1> */}
                        <input id="radio1" type="radio" name="css-tabs" defaultChecked />
                        <input id="radio2" type="radio" name="css-tabs" />
                        <div id="tabs" className="d-flex">
                            <label id="tab1" htmlFor="radio1">Home</label>
                            <label id="tab2" htmlFor="radio2" >Services</label>
                        </div>
                        <div id="content" >
                            <section id="content1" className="mt-2">
                                <div className="row" style={{ position: 'relative', height: '400px', overflowX: 'hidden' }}>
                                    <div className="col-md-12 d-flex m-3" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                            </div>
                                            <div className="col-md-6" >
                                                <span>Tên phim</span>
                                                <span>Thời lượng</span>
                                                <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-12 d-flex m-3" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                            </div>
                                            <div className="col-md-6" >
                                                <span>Tên phim</span>
                                                <span>Thời lượng</span>
                                                <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 d-flex m-3" >
                                        <div className="row">
                                            <div className="col-md-6">
                                                <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                            </div>
                                            <div className="col-md-6" >
                                                <span>Tên phim</span>
                                                <span>Thời lượng</span>
                                                <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </section>
                            <section id="content2" className="text-white">
                                <div>
                                    <p>Họ tên: </p>
                                    <p>Email: </p>
                                    <p>Số điện thoại: </p>
                                    <p>Tài khoản: </p>
                                    <p>Mật khẩu: </p>
                                    <button className="btn btn-success">Chỉnh sửa</button>
                                </div>
                            </section>
                        </div>

                    </main>
                </div>

            </Fragment>

        )



    } else {
        alert('Vui lòng đăng nhập để vào trang này !')
        return <Redirect to="/loginlogout" />
    }

}
