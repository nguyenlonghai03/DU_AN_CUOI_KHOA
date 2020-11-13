import React, { Fragment, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { layTatCaThongTinHeThongRapApi } from '../../../redux/actions/QuanLyPhimActions';
import { NavLink } from 'react-router-dom'
import moment from 'moment'

export default function Cinemas(props) {
    const { tatCaThongTinHeThongRap } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layTatCaThongTinHeThongRapApi())
    }, [])

    console.log("TAT CA", tatCaThongTinHeThongRap)

    return (
        <div className="container-fluid bg-dark py-5">
            <div className="container text-center ">
                <div className="row bg-light text-dark py-5">
                    <div className="nav flex-column nav-pills col-2" role="tablist" d="v-pills-tab" aria-orientation="vertical" >
                        {tatCaThongTinHeThongRap?.map((heThongRap, index) => {
                            let active = index === 0 ? 'active' : '';
                            return <a className={`nav-link ${active}`} data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                                <img src={heThongRap.logo} alt={heThongRap.logo} style={{ width: 50, height: 50 }} />
                            </a>
                        })}
                    </div>
                    <div className="col-4 tab-content">
                        {tatCaThongTinHeThongRap.map((heThongRap, index) => {
                            let active = index === 0 ? 'active show' : '';
                            return <div key={index} id={heThongRap.maHeThongRap} className={`tab-pane fade ${active}`} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                {heThongRap.lstCumRap.slice(0, 5).map((cumRap, index) => {
                                    let active = index === 0 ? "active" : '';
                                    return <div key={index} className="text-left py-2 " >
                                        <a className={`nav-link p-0 m-0 ${active}`} data-toggle="pill" href={`#${cumRap.maCumRap}`} role="tabpanel" aria-controls="v-pills-home" aria-labelledby="v-pills-home-tab">
                                            <p className="p-0 m-0">{cumRap.tenCumRap}</p>
                                        </a>
                                        <p className="p-0 m-0">{cumRap.diaChi}</p>
                                    </div>
                                })}
                            </div>
                        })}
                    </div>
                    <div className="col-6" className="tab-content">
                        {tatCaThongTinHeThongRap.map((heThongRap, index) => {
                            return heThongRap.lstCumRap.slice(0, 5).map((cumRap, index) => {
                                let active = index === 0 ? "active" : "";
                                return <div key={index} className={`tab-pane fade ${active}`} id={cumRap.maCumRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
                                        return <div className="p-3 m-2" style={{ border: '1px solid black', borderRadius: '40px', overflow: 'hidden' }}>
                                            <div className="d-flex">
                                                <img src={phim.hinhAnh} alt={phim.hinhAnh} style={{ width: 50, height: 50 }} />
                                                <div className="pl-3" style={{ paddingTop: '13px' }}>
                                                    <p key={index}>{phim.tenPhim}</p>
                                                </div>
                                            </div>

                                            <div className="row my-2">
                                                <div className="col-12 d-flex">
                                                    {phim.lstLichChieuTheoPhim.slice(0, 5).map((lichChieu, index) => {
                                                        return <NavLink key={index} to={'/chitietphongve/' + lichChieu.maLichChieu} className="col-2">{moment(lichChieu.ngayChieuGioChieu).format('hh:mm a')}</NavLink>
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    })}
                                </div>
                            })
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
}
