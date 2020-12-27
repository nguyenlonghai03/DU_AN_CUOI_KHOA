import React, { useEffect } from 'react';
import $ from 'jquery'
import { useSelector, useDispatch } from 'react-redux';
import { layChiTietPhimApi } from '../../redux/actions/QuanLyPhimActions';
import moment from 'moment'
import { NavLink } from 'react-router-dom';


export default function ChiTietPhim(props) {
    console.log("PROPS", props);
    const { maPhim } = props.match.params;
    const dispatch = useDispatch();
    console.log("maPhim", maPhim)

    const { chiTietPhim } = useSelector(state => state.QuanLyPhimReducer)

    useEffect(async () => {
        dispatch(await layChiTietPhimApi(maPhim))
    }, [])

    console.log("chitietphim", chiTietPhim);






    return (
        <>
            <div>
                <div className="Banner_sec" id="home">
                    <div className="bannerside">
                        <div className="Center">
                            <div className="leftside">
                                <h3>{chiTietPhim?.tenPhim}<span>Đánh giá: {chiTietPhim?.danhGia}</span></h3>
                                <p>Mô tả: {chiTietPhim?.moTa}</p>
                                <p className="m-0 p-0">Ngày khởi chiếu: {moment(chiTietPhim?.ngayKhoiChieu).format('MMMM Do YYYY')}</p>
                                <a className="my-2" href="#about">Đặt vé</a>
                            </div>
                            <div className="rightside">
                                <ul id="slider">
                                    <li>
                                        <div className="Slider">
                                            <figure><img src={chiTietPhim?.hinhAnh} style={{ width: '100%', height: "500px" }} alt="image" /></figure>
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
                                <figure><img src="../img/Shadow-img.png" alt="image" className="Shadow" /></figure>
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
                        <div className="nav flex-column nav-pills col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                                let active = index === 0 ? 'active' : '';
                                return <a key={index} className={'nav-link ' + active} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <img src={heThongRap.logo} alt={heThongRap.logo} style={{ width: 50, height: 50 }} /> {heThongRap.tenHeThongRap}
                                </a>

                            })}
                        </div>
                    </div>
                    <div className="tab-content col-9" id="v-pills-tabContent">

                        {chiTietPhim.heThongRapChieu?.map((heThongRap, index) => {
                            let active = index === 0 ? 'active' : '';

                            return <div key={index} className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {heThongRap.cumRapChieu?.map((cumRap, index) => {
                                    return <div key={index}>
                                        <p style={{ fontWeight: 'bold', fontSize: '25px' }}>
                                            {cumRap.tenCumRap}
                                        </p>
                                        <div className="row">
                                            {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                return <NavLink key={index} to={'/phongve/' + lichChieu.maLichChieu} className="m-2 btn btn-outline-info">
                                                    {moment(lichChieu.ngayChieuGioChieu).format('hh:mm a')}

                                                </NavLink>
                                            })}
                                        </div>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
