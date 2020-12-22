import React from 'react'

export default function QuanLyNguoiDung() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tài khoản</th>
                        <th>Mật khẩu</th>
                        <th>Họ tên</th>
                        <th>Email</th>
                        <th>Số điện thoại</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>LongHai</td>
                        <td>123456</td>
                        <td>
                            {/* <span className="dot">
                                <i className="bg-success" />
                      Completed
                    </span> */}
                    Nguyễn Long Hải
                        </td>
                        <td>nguyenlonghai03@gmail.com</td>
                        <td>065189541652</td>
                        <td>
                            <button className="btn btn-success">Sửa</button>
                            <button className="btn btn-danger">Xóa</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
