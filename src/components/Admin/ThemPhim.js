import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Axios from "axios";
import { ThemPhimUploadHinhApi } from '../../redux/actions/QuanLyPhimActions';

export default function ThemPhim() {
    const [state, setstate] = useState({
        maPhim: '',
        tenPhim: '',
        trailer: '',
        danhGia: '',
        moTa: '',
        hinhAnh: {},
        maNhom: 'GP03'
    })
    const dispatch = useDispatch();

    const handleChange = (e) => {
        // console.log("State", state)

        let target = e.target;
        if (target.name === 'hinhAnh') {
            setstate({
                ...state,
                hinhAnh: e.target.files[0]
            })
        } else {
            setstate({
                ...state,
                [e.target.name]: e.target.value
            })
        }

        // console.log(JSON.stringify(state))

    }


    const handleSubmit = (e) => {

        // CHUA VALIDATION
        e.preventDefault();
        var form_data = new FormData();
        for (var key in state) {
            console.log("KEY", state[key])
            form_data.append(key, state[key]);
        }

        // console.log("FORM", form_data.get('tenPhim'));
        //Đối tượng bảo mật giao lưu font-end vs fe thì dùng form data cho nên k có thấy đc
        e.preventDefault();
        // Axios({
        //     url: 'https://movie0706.cybersoft.edu.vn/api/QuanLyPhim/ThemPhimUploadHinh',
        //     method: 'POST',
        //     data: form_data
        // }).then(res => {
        //     console.log("RES", res)
        // }).catch(err => {
        //     console.log(err.response.data);
        // })
        dispatch(ThemPhimUploadHinhApi(form_data))
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1 className="text-center mb-5">THÊM PHIM</h1>
            <div className="row m-3 form-group">
                <div className="col">
                    <label>Mã phim</label>
                    <input name="maPhim" type="text" onChange={handleChange} className="form-control" />
                </div>
                <div className="col">
                    <label >Ngày khởi chiếu</label>
                    <input name="ngayKhoiChieu" onChange={handleChange} type="text" className="form-control" />
                </div>
            </div>
            <div className="row m-3 form-group">
                <div className="col">
                    <label>Tên phim</label>
                    <input name="tenPhim" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="col">
                    <label>Đánh giá</label>
                    <input name="danhGia" onChange={handleChange} type="text" className="form-control" />
                </div>
            </div>
            <div className="row m-3">
                <div className="col">
                    <label>Trailer</label>
                    <input name="trailer" onChange={handleChange} type="text" className="form-control" />
                </div>
                <div className="col">
                    <label>Hình ảnh</label>
                    <input type="file" onChange={handleChange} name="hinhAnh" className="form-control" />
                </div>
            </div>
            <div className="row m-3 form-group">
                <div className="col">
                    <label>Mô tả</label>
                    <textarea name="moTa" onChange={handleChange} className="form-control">

                    </textarea>
                </div>
                <div className="col">
                    <label>Mã nhóm</label>
                    <input name="maNhom" value="GP03" className="form-control" />
                </div>
            </div>
            <button type="submit" className="btn btn-success">Thêm phim</button>
            <button type="button" className="btn btn-success ml-3">Lưu</button>
        </form>

    )
}
