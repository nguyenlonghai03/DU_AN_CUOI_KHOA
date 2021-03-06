import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import { layTatCaApi } from '../../../redux/actions/QuanLyPhimActions';
import { QuanLyPhimReducer } from '../../../redux/reducers/QuanLyPhimReducer';


export default function Cinemas(props) {
    const { layTatCa, phimTheoHeThong } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();

    useEffect(async () => {
        dispatch(await layTatCaApi())

    }, [])

    // console.log("LAY_TAT_CA", layTatCa);
    // console.log("PHIM_THEO_HE_THONG", phimTheoHeThong);


    const renderLogo = () => {
        return layTatCa?.map((heThongRap, index) => {
            let active = index === 0 ? 'active' : '';
            return <a onClick={() => {
                dispatch({
                    type: 'LAY_PHIM_THEO_HE_THONG',
                    maHeThongRap: heThongRap.maHeThongRap
                })
            }} className={`nav-link ${active}`} id="v-pills-home-tab" data-toggle="pill" href={`#${heThongRap.maHeThongRap}`} role="tab" aria-controls="v-pills-home" aria-selected="true">
                <img src={heThongRap.logo} style={{ width: "50px", height: "50px", margin: '0 auto' }} />
            </a>

        })
    }

    const renderCumRap = () => {
        return layTatCa.map((heThongRap, index) => {
            let active = index === 0 ? 'active' : '';
            return <div className={`tab-pane fade show ${active}`} id={heThongRap.maHeThongRap} role="tabpanel" aria-labelledby="v-pills-home-tab">
                {heThongRap.lstCumRap.slice(0, 5).map((cumRap, index) => {
                    return <div className="text-left m-3">
                        <a onClick={() => {
                            dispatch({
                                type: 'LAY_PHIM_THEO_CUM',
                                maCum: cumRap.maCumRap
                            })
                        }} className="btn btn-success">
                            {cumRap.tenCumRap}
                        </a>
                    </div>
                })}
            </div>
        })
    }

    const renderPhim = () => {
        return (phimTheoHeThong?.slice(0, 5).map((phim, index) => {
            return <div key={index} className="d-flex m-2">
                <div>
                    <img src={phim.hinhAnh} style={{ width: 50, height: 50 }} alt={phim.hinhAnh} />
                </div>
                <div className="d-flex flex-column text-left px-4">
                    <p>{phim.tenPhim}</p>
                    <div className="d-flex row">{phim.lstLichChieuTheoPhim?.slice(0, 5).map((lichChieu, index) => {
                        return <NavLink className="btn btn-outline-info m-2 " key={index} to={'/phongve/' + lichChieu.maLichChieu}>{moment(lichChieu?.ngayChieuGioChieu).format('h:mm a')}</NavLink>
                    })}</div>
                </div>
            </div>
        })
        )

    }




    return (
        <>
            <div style={{ fontSize: "15px", backgroundColor: 'black' }} className="cinemas container-fluid  py-5" >
                <div className="container text-center ">
                    <div id="cinemas__inside" className="row bg-light text-white py-5">
                        <div style={{ justifyContent: 'space-around' }} className="nav nav-pills col-md-12 row-cols-sm-2" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {renderLogo()}
                        </div>
                        <div className="tab-content col-md-4" id="v-pills-tabContent" >
                            {renderCumRap()}
                        </div>
                        <div className="col-md-6" >
                            {renderPhim()}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )




}
