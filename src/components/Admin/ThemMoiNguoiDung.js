import React from 'react'

export default function ThemMoiNguoiDung(props) {
    return (
        <form>
            <h1 className="text-center mb-5">THÊM NGƯỜI DÙNG</h1>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Tài khoản" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Họ tên" />
                </div>
            </div>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Mật khẩu" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Email" />
                </div>
            </div>
            <div className="row m-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Số điện thoại" />
                </div>
                <div className="col">
                    <select className="form-control">
                        <option>
                            Loại người dùng
                        </option>
                        <option>
                            Khách hàng
                        </option>
                        <option>
                            Quản trị
                        </option>
                    </select>
                </div>
            </div>
            <button type="submit" className="btn btn-success">Thêm người dùng</button>
            <button type="button" className="btn btn-success ml-3">Lưu</button>
        </form>


    )
}
