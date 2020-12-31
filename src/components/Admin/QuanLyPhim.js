import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { layDanhSachPhimAdminApi, suaPhim } from '../../redux/actions/QuanLyPhimActions'
import Modal from './Modal'
import ModalCapNhatPhim from './ModalCapNhatPhim'



const HandleModal = () => new Modal()
const HandleModalCapNhat = () => new ModalCapNhatPhim();
export default function QuanLyPhim() {
    const { danhSachPhimAdmin } = useSelector(state => state.QuanLyPhimReducer)
    const dispatch = useDispatch();
    useEffect(async () => {
        dispatch(await layDanhSachPhimAdminApi())
    }, [])

    console.log("DS", danhSachPhimAdmin)

    const renderModalCapNhat = () => {
        return HandleModalCapNhat()
    }
    const renderModal = () => {
        return HandleModal()
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Mã phim</th>
                        <th>Tên phim</th>
                        <th>Hình ảnh</th>
                        <th>Mô tả</th>
                        <th>Mã nhóm</th>
                        <th>Ngày khởi chiếu</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {danhSachPhimAdmin.map((phim, index) => {
                        return (

                            <tr>
                                <td>{phim.maPhim}</td>
                                <td>{phim.tenPhim}</td>
                                <td>
                                    <img src={phim.hinhAnh} style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td>
                                    {phim.moTa}
                                </td>
                                <td>{phim.maNhom}</td>
                                <td>{phim.ngayKhoiChieu}</td>
                                <td>
                                    <button className="btn btn-success m-1" data-toggle="modal" data-target="#modelId">Tạo lịch chiếu</button>
                                    <button className="btn btn-success m-1" data-toggle="modal" data-target="#modelIdCapNhat" onClick={async () => {
                                        dispatch(await suaPhim(phim))
                                    }}>Sửa</button>
                                    <button className="btn btn-danger m-1">Xóa</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
            {renderModal()}
            {renderModalCapNhat()}

        </>
    )
}
