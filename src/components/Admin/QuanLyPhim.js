import React from 'react'
import Modal from './Modal'



const HandleModal = () => new Modal()
export default function QuanLyPhim() {

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
                    <tr>
                        <td>1354</td>
                        <td>Sth</td>
                        <td>
                            <img src="https://picsum.photos/200/200" style={{ width: '50px', height: '50px' }} />
                        </td>
                        <td>
                            {/* <span className="dot">
                                <i className="bg-success" />
                      Completed
                    </span> */}
                    mô tả phim ở đây
                        </td>
                        <td>GP03</td>
                        <td>ngày ở đây</td>
                        <td>
                            <button className="btn btn-success m-1" data-toggle="modal" data-target="#modelId">Tạo lịch chiếu</button>
                            <button className="btn btn-success m-1">Sửa</button>
                            <button className="btn btn-danger m-1">Xóa</button>
                        </td>
                    </tr>
                </tbody>

            </table>
            {renderModal()}

        </>
    )
}
