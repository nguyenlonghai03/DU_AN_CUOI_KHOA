import React, { Fragment, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { layDanhSachPhimTheoCumRapApi, layPhimTheoCumRap, layThongTinCumRapTheoHeThongApi, layThongTinHeThongRapApi } from '../../../redux/actions/QuanLyPhimActions';


export default function Cinemas(props) {
    const { thongTinHeThongRap, cumRapTheoHeThong, phimTheoCumRap, phimTheoHeThongRap } = useSelector(state => state.QuanLyPhimReducer);
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(await layThongTinHeThongRapApi());
    }, [])
    useEffect(() => {
        dispatch(layThongTinCumRapTheoHeThongApi(thongTinHeThongRap[0]?.maHeThongRap))
    }, [thongTinHeThongRap])
    useEffect(async () => {
        dispatch(await layDanhSachPhimTheoCumRapApi(thongTinHeThongRap[0]?.maHeThongRap))
    }, [thongTinHeThongRap])

    useEffect(async () => {
        dispatch(await layPhimTheoCumRap(cumRapTheoHeThong[0]?.maCumRap))
    }, [cumRapTheoHeThong])



    // const [cumRapTheoHeThong, setCumRapTheoHeThong] = useState([cumRapTheoHeThong]);
    console.log("thongTinHeThongRap", thongTinHeThongRap)
    console.log("cumRapTheoHeThong", cumRapTheoHeThong)
    console.log("phimTheoCumRap", phimTheoCumRap)
    console.log("phimTheoHeThongRap", phimTheoHeThongRap)


    const renderThongTinHeThongRap = () => {
        return thongTinHeThongRap.map((heThongRap, index) => {
            return <img className="m-3" type="button" key={index} src={heThongRap.logo} style={{ width: 50, height: 50 }} onClick={async () => {
                dispatch(await layThongTinCumRapTheoHeThongApi(heThongRap.maHeThongRap));
                dispatch(await layDanhSachPhimTheoCumRapApi(heThongRap.maHeThongRap))
            }} />
        })

    }
    const renderCumRapTheoHeThong = () => {
        return cumRapTheoHeThong.slice(0, 5).map((cumRap, index) => {
            return <div key={index}>
                <a onClick={() => {
                    dispatch(layPhimTheoCumRap(cumRap.maCumRap))
                }} type="button">{cumRap.tenCumRap}</a>
                <p>{cumRap.diaChi}</p>
            </div>
        })
    }
    const renderPhimTheoCumRap = () => {
        return phimTheoCumRap?.slice(0, 5).map((phim, index) => {
            return <div key={index} className="d-flex m-2">
                <div>
                    <img src={phim.hinhAnh} style={{ width: 50, height: 50 }} alt={phim.hinhAnh} />
                </div>
                <div className="d-flex flex-column text-left px-4">
                    <p>{phim.tenPhim}</p>
                    <p className="d-flex">{phim.lstLichChieuTheoPhim?.slice(0, 5).map((lichChieu, index) => {
                        return <span>{moment(lichChieu.ngayChieuGioChieu).format('h:mm a')}</span>
                    })}</p>
                </div>
            </div>
        })
    }

    return (
        <div style={{ fontSize: "15px" }} className="cinemas container-fluid bg-dark py-5">
            <div className="container text-center ">
                <div className="row bg-light text-dark py-5">
                    <div className="d-flex flex-column col-2" >
                        {renderThongTinHeThongRap()}
                    </div>
                    <div className="col-4" >
                        {renderCumRapTheoHeThong()}
                    </div>
                    <div className="col-6" >
                        {renderPhimTheoCumRap()}
                    </div>
                </div>
            </div>
        </div>
    )
}


