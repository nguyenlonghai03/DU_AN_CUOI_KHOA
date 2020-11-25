import React from 'react';
import $ from 'jquery'
import Cinemas from '../../components/TrangChu/Cinemas/Cinemas';
export default function ChiTietPhim(props) {



    return (
        <>
            <div>
                <div className="Banner_sec" id="home">
                    <div className="bannerside">
                        <div className="Center">
                            <div className="leftside">
                                <h3>Tên phim<span>Số sao đánh giá</span></h3>
                                <p>November is a professional website template that is responsive and mobile friendly for
            any device. This template is provided by templatemo.com</p>
                                <p className="m-0 p-0">Thời lượng: 120p</p>
                                <p>Ngày khởi chiếu</p>
                                <a href="#about">Đặt vé</a>
                            </div>
                            <div className="rightside">
                                <ul id="slider">
                                    <li>
                                        <div className="Slider">
                                            <figure><img src="img/Slider-img1.jpg" alt="image" /></figure>
                                            <div className="text">
                                                <div className="Icon">
                                                    <ul>
                                                        <li><a href="#"><i className="fa fa-heart" />700</a></li>
                                                        <li><a href="#"><i className="fa fa-comment" />150</a></li>
                                                    </ul>
                                                </div>
                                                <div className="Lorem">
                                                    <p>lorem quis bibendum <span>Necagittis Nibel</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <figure><img src="img/Shadow-img.png" alt="image" className="Shadow" /></figure>
                            </div>
                        </div>
                    </div>
                    <div className="clear" />
                </div>

                <div className="bgcolor" />
            </div>
            <div className="bg-dark p-5">
                <div className="row bg-light ">
                    <div className="col-3">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <a className="nav-link active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                            <a className="nav-link" id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                            <a className="nav-link" id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">Messages</a>
                            <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
                        </div>
                    </div>
                    <div className="col-9">
                        <div className="tab-content" id="v-pills-tabContent">
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
