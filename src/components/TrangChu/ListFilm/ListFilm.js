import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimApiAction } from '../../../redux/actions/QuanLyPhimActions';
import $ from 'jquery';
import moment from 'moment';
import Slider from "react-slick";


export default function ListFilm() {

    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    const dispatch = useDispatch();
    let settingSlick = {
        slidesToShow: 4,
        autoplay: false,
        rows: 2,
    }

    useEffect(() => {
        dispatch(layDanhSachPhimApiAction());
    }, [])

    console.log('dsPhim', dsPhim);

    const renderDSPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="movieList__item p-3" key={index}>
                <img src={phim.hinhAnh} alt="Image" className="img-fluid" />
                <div className="movieList__info">
                    <h4>{phim.tenPhim}</h4>
                    <p>{moment(phim.ngayKhoiChieu).format('hh:mm A')}</p>

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
                </div>
            </section>
        </div>

    )
}
