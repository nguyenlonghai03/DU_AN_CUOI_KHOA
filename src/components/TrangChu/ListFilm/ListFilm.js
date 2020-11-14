import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layDanhSachPhimApiAction } from '../../../redux/actions/QuanLyPhimActions';
import moment from 'moment'


export default function ListFilm() {

    const dsPhim = useSelector(state => state.QuanLyPhimReducer.dsPhim);
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(layDanhSachPhimApiAction());
    }, [])

    console.log(dsPhim);

    const renderDSPhim = () => {
        return dsPhim.map((phim, index) => {
            return <div className="movieList__item col-6 col-md-4 col-lg-3 mb-3" key={index}>
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
                    <div className="row">
                        {renderDSPhim()}
                    </div>
                </div>
            </section>
        </div>

    )
}
