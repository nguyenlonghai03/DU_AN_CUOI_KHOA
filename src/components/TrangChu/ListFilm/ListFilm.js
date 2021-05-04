import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhimApi, layDanhSachPhimApiAction, layNgayGioPhim, layThongTinLichChieuApi } from '../../../redux/actions/QuanLyPhimActions';
import $ from 'jquery';
import moment from 'moment';
import Slider from "react-slick";
import PopupVideo from '../../../templates/PopupVideo'
import { NavLink } from 'react-router-dom'




export default function ListFilm() {
    let [valid, setValid] = useState(false)
    const { dsPhim, layTatCa, chiTietPhim, layLichChieuTheoMaCum, maLichChieu } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();


    const [isOpen, setOpen] = useState(false)
    const [urlVideo, seturlVideo] = useState('')



    useEffect(() => {
        dispatch(layDanhSachPhimApiAction());
    }, [])

    const getIdVideo = (url) => {
        var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        return (url.match(p)) ? RegExp.$1 : false;
    }


    const renderDSPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="col-md-4 col-sm-12">
                <img src={phim.hinhAnh} className="anhCr" alt="Image" style={{ position: 'relative' }} />
                <div className="movieList__info" style={{ position: 'relative' }}>
                    {/* <h4>{phim.tenPhim}</h4> */}
                    <p>{moment(phim.ngayKhoiChieu).format('hh:mm A')}</p>
                    <div className="d-flex" style={{ padding: 0, textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                        <button className="btn btn-primary m-1" onClick={() => {
                            setOpen(true);
                            seturlVideo(getIdVideo(phim.trailer));
                        }}>
                            Video
                        </button>
                        <NavLink type="button" className="btn btn-success m-1 linkN" to={`/chitietphim/:${phim.maPhim}`}>Detail</NavLink>

                    </div>

                </div>

            </div>


        });
    }

    // ================ Phần tìm kiếm ==================



    const renderTenPhimTimKiem = () => {
        return dsPhim.map((phim, index) => {
            return <option key={index} value={phim.maPhim}>{phim.tenPhim}</option>
        })
    }
    const renderRapTheoTenPhim = () => {
        return chiTietPhim.heThongRapChieu?.map((rap, index) => {

            return rap.cumRapChieu?.map((tenRap, index) => {
                return <option value={tenRap.maCumRap} key={index}>{tenRap.tenCumRap}</option>
            })
            // console.log("RAP", rap)
        })
    }
    const renderNgayGioChieu = () => {

        return layLichChieuTheoMaCum.map((lich, index) => {

            return <option value={lich.maLichChieu} key={index}>{moment(lich.ngayChieuGioChieu).format('MMMM Do YYYY // hh:mm a')}</option>
        })
    }



    const renderSlick = () => {
        var settings = {
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        centerPadding: '40px',
                        slidesToShow: 1
                    }
                }
            ]
        };
        return (
            <div className="col" style={{ padding: 0, textAlign: "center" }}>
                <Slider {...settings}>
                    {renderDSPhim()}
                </Slider>
            </div>
        );
    }





    const handleChangeSelect = async (e) => {

        dispatch(await layChiTietPhimApi(e.target.value))

    }
    const handleChangeRap = (e) => {
        // console.log("EEE", e.target.value)
        dispatch(layNgayGioPhim(e.target.value))
    }
    const handleChangeNgayChieu = (e) => {
        // console.log("er", e.target.value)
        dispatch({
            type: 'LAY_MA_LICH_CHIEU',
            data: e.target.value
        })
        // console.log("VLLLL", valid)

        setValid(true);
    }


    return (
        <div>
            <section className="movieList py-5 mx-auto">
                <div className="container ">
                    <div className="row form-control p-3" style={{ height: 'auto', margin: '0px' }}>
                        <div className="col-md-4 col-sm-12">
                            <select onChange={handleChangeSelect} className="form-control col px-3">
                                <option>Phim</option>
                                {renderTenPhimTimKiem()}
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-12  ">
                            <select onChange={handleChangeRap} className="form-control col px-3">
                                <option>Rạp</option>
                                {renderRapTheoTenPhim()}
                            </select>
                        </div>
                        <div className="col-md-4 col-sm-12  ">
                            <select onChange={handleChangeNgayChieu} className="form-control col px-3">
                                <option>Ngày xem/ Giờ xem</option>
                                {renderNgayGioChieu()}
                            </select>
                        </div>
                        {/* <select className="form-control col mx-3">
                                <option>Xuất chiếu</option>
                                {renderSuatChieu()}
                            </select> */}

                        {valid === true ? <NavLink to={'/phongve/' + maLichChieu} className="btn btn-success col mx-3">Mua vé</NavLink> : <NavLink to={'/phongve/' + maLichChieu} className="btn btn-success col mx-3 disabled">Mua vé</NavLink>}

                    </div>
                    <div className="row">
                        <div className="col">
                            <h1 className="text-center my-4">Danh sách phim</h1>
                        </div>
                        {renderSlick()}

                    </div>
                    <PopupVideo isOpen={isOpen} onClose={() => setOpen(false)} videoId={urlVideo} />
                </div>

            </section>

        </div>

    )
}
