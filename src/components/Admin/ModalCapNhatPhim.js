import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { capNhatPhimApi } from '../../redux/actions/QuanLyPhimActions';

export default function ModalCapNhatPhim() {
    const dispatch = useDispatch();
    const { stateFormFilm } = useSelector(state => state.QuanLyPhimReducer);


    const handleChange = (e) => {
        const { name, value } = e.target;
        let target = e.target;
        // Xử lý value, tạo ra values mới và thay đổi bên trong nó
        let newValues = { ...stateFormFilm.values };

        if (target.name === 'hinhAnh') {
            newValues[name] = e.target.files[0]
        } else {
            newValues[name] = value;
        }



        console.log("NEW", newValues)
        let action = {
            type: 'HANDLE_CHANGE_INPUT_FILM',
            newState: {
                values: newValues
            }
        }
        dispatch(action);
        // ==================

        // if (target.name === 'hinhAnh') {
        //     // console.log(target.files)
        //     setHinhAnh({
        //         ...state,
        //         hinhAnh: e.target.files[0]
        //     })
        // } else {

        // }


    }

    const handleSubmit = (e) => {
        e.preventDefault();

        var form_dataFilm = new FormData();
        for (var key in stateFormFilm.values) {
            // console.log("KEY", stateFormFilm.values[key])
            form_dataFilm.append(key, stateFormFilm.values[key])
        }
        // dispatch(capNhatNguoiDungApi(stateForm.values))
        e.preventDefault();
        dispatch(capNhatPhimApi(form_dataFilm))

    }

    // console.log("STAPHIm", stateFormFilm)


    return (

        <div className="modal fade" id="modelIdCapNhat" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">

                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <h1 className="text-center mb-5">CẬP NHẬT PHIM</h1>
                            <div className="row m-3 form-group">
                                <div className="col">
                                    <label>Mã phim</label>
                                    <input value={stateFormFilm.values?.maPhim} name="maPhim" type="text" onChange={handleChange} className="form-control" />
                                </div>
                                <div className="col">
                                    <label >Ngày khởi chiếu</label>
                                    <input value={stateFormFilm.values?.ngayKhoiChieu} name="ngayKhoiChieu" onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row m-3 form-group">
                                <div className="col">
                                    <label>Tên phim</label>
                                    <input value={stateFormFilm.values?.tenPhim} name="tenPhim" onChange={handleChange} type="text" className="form-control" />
                                </div>
                                <div className="col">
                                    <label>Đánh giá</label>
                                    <input value={stateFormFilm.values?.danhGia} name="danhGia" onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col">
                                    <label>Trailer</label>
                                    <input value={stateFormFilm.values?.trailer} name="trailer" onChange={handleChange} type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row m-3">
                                <div className="col">
                                    <label>Hình ảnh</label>
                                    <input type="file" onChange={handleChange} name="hinhAnh" className="form-control" />
                                </div>
                            </div>
                            <div className="row m-3 form-group">
                                <div className="col">
                                    <label>Mô tả</label>
                                    <textarea name="moTa" rows="5" value={stateFormFilm.values?.moTa} onChange={handleChange} className="form-control">

                                    </textarea>
                                </div>
                                <div className="col">
                                    <label>Mã nhóm</label>
                                    <input name="maNhom" value={stateFormFilm.values?.maNhom} className="form-control" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-success" >Cập nhật phim</button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    )
}

