import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layChiTietPhimApi, layDanhSachPhimApiAction, layNgayGioPhim, layThongTinLichChieuApi } from '../../../redux/actions/QuanLyPhimActions';
import $ from 'jquery';
import moment from 'moment';
import Slider from "react-slick";
import PopupVideo from '../../../templates/PopupVideo'
import { NavLink } from 'react-router-dom'




export default function ListFilm() {


    const { dsPhim, layTatCa, chiTietPhim, layLichChieuTheoMaCum, maLichChieu } = useSelector(state => state.QuanLyPhimReducer);
    console.log("XXx", chiTietPhim)

    // console.log("Taatsca", layTatCa)z
    console.log("LAYAA", maLichChieu)


    const dispatch = useDispatch();
    let settingSlick = {
        slidesToShow: 4,
        autoplay: false,
        rows: 2,
    }

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
            return <div className="movieList__item p-3" key={index}>
                <img src={phim.hinhAnh} alt="Image" className="img-fluid" />
                <div className="movieList__info">
                    <h4>{phim.tenPhim}</h4>
                    <p>{moment(phim.ngayKhoiChieu).format('hh:mm A')}</p>
                    <div>
                        <button type="button" className="btn btn-primary" onClick={() => {
                            setOpen(true);
                            seturlVideo(getIdVideo(phim.trailer));
                        }}>
                            Video
                        </button>
                        <NavLink className="btn btn-success" to={`/chitietphim/:${phim.maPhim}`}>Chi tiết</NavLink>
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





    const handleChangeSelect = async (e) => {

        dispatch(await layChiTietPhimApi(e.target.value))

    }
    const handleChangeRap = (e) => {
        console.log("EEE", e.target.value)
        dispatch(layNgayGioPhim(e.target.value))
    }
    const handleChangeNgayChieu = (e) => {
        // console.log("er", e.target.value)
        dispatch({
            type: 'LAY_MA_LICH_CHIEU',
            data: e.target.value
        })
    }


    return (
        <div>

            <section className="movieList py-5 mx-auto">
                <div className="container ">
                    <div className="row form-control p-3" style={{ height: 'auto', margin: '0px' }}>
                        <div className="col-md-4 col-sm-12  ">
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
                        <NavLink to={'/phongve/' + maLichChieu} className="btn btn-success col mx-3">Mua vé</NavLink>

                    </div>
                    <h1 className="text-center my-4">Danh sách phim</h1>
                    <Slider {...settingSlick}>
                        {renderDSPhim()}
                    </Slider>
                    <PopupVideo isOpen={isOpen} onClose={() => setOpen(false)} videoId={urlVideo} />
                </div>
            </section>
        </div>

    )
}
