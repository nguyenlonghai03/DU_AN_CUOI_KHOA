import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { taoLichChieuApi } from '../../redux/actions/QuanLyPhimActions';

export default function Modal() {
    const { phimLichChieu } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();
    // let maPhimNe = phimLichChieu.maPhim



    const [state, setState] = useState({
        maPhim: 0,
        ngayChieuGioChieu: '',
        maRap: 0,
        giaVe: 0
    })


    const handleChange = e => {
        const { name, value } = e.target;

        if (name === "ngayChieuGioChieu") {
            setState({
                ...state,
                [name]: value
            })
        } else {
            setState({
                ...state,
                [name]: Number(value)
            })
        }


        // console.log("stataaaaa", state)


    }



    const handleSubmit = e => {
        e.preventDefault();
        let objTaoLichChieu = state;
        dispatch(taoLichChieuApi(objTaoLichChieu))

    }

    console.log("PHIMASKDAS", phimLichChieu)

    return (
        //         <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        //   Launch
        // </button>
        <div style={{ width: '100%', height: '100%' }} className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ width: '600px' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">
                            Tạo lịch chiếu phim
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} >
                            <div className="row">
                                <div className="col">
                                    <label>Mã phim</label>
                                    <input type="number" name="maPhim" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>Ngày chiếu giờ chiếu (dd/mm/yyyy hh:mm:ss)</label>
                                    <input name="ngayChieuGioChieu" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>Mã rạp</label>


                                    <select name="maRap" className="form-control" onChange={handleChange}>
                                        <option>
                                            Mã rạp
                                        </option>

                                        <option value={699}>
                                            CGV-vincom-Lanmark81 (699)
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>Giá vé</label>
                                    <input name="giaVe" className="form-control" onChange={handleChange} />
                                </div>
                            </div>
                            {/* <div className="row">
                                <div className="col">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Mã lịch chiếu</th>
                                                <th>Hệ thống rạp</th>
                                                <th>Cụm rạp</th>
                                                <th>Ngày giờ chiếu</th>
                                                <th>Giá vé</th>
                                                <th>Thời lượng phim</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>1</td>
                                                <td>BHD star</td>
                                                <td>BHD cụm</td>
                                                <td>
                                                    17/7/2020 10:00:00
                                            </td>
                                                <td>
                                                    75000
                        </td>
                                                <td>120p</td>
                                                <td>

                                                    <button className="btn btn-danger m-1">Xóa</button>
                                                </td>
                                            </tr>
                                        </tbody>

                                    </table>
                                </div>
                            </div> */}

                            <button className="m-3 btn btn-success">Thêm lịch chiếu</button>

                        </form>
                    </div>

                </div>
            </div>
        </div>


    )
}

