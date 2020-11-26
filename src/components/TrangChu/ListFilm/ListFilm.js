import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimApiAction } from '../../../redux/actions/QuanLyPhimActions';
import $ from 'jquery';
import moment from 'moment';
import Slider from "react-slick";
import PopupVideo from '../../../templates/PopupVideo'
import { NavLink } from 'react-router-dom'




export default function ListFilm() {


    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
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


    return (
        <div>
            <section className="movieList py-5">
                <div className="container">
                    <Slider {...settingSlick}>
                        {renderDSPhim()}
                    </Slider>
                    <PopupVideo isOpen={isOpen} onClose={() => setOpen(false)} videoId={urlVideo} />
                </div>
            </section>
        </div>

    )
}
