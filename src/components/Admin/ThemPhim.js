import React from 'react'

export default function ThemPhim() {
    return (
        <form>
            <h1 className="text-center mb-5">THÊM PHIM</h1>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Mã phim" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Ngày khởi chiếu" />
                </div>
            </div>
            <div className="row m-3 form-group">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Tên phim" />
                </div>
                <div className="col">
                    <input type="text" className="form-control" placeholder="Đánh giá" />
                </div>
            </div>
            <div className="row m-3">
                <div className="col">
                    <input type="text" className="form-control" placeholder="Trailer" />
                </div>
                <div className="col">
                    <span>Hình ảnh</span>
                    <img src="https://picsum.photos/200/200" style={{ width: '50px', height: "50px" }} />
                    <a href="#">Browser...</a>
                </div>
            </div>
            <div className="row m-3 form-group">
                <textarea className="form-control">
                    Mô tả
                </textarea>
            </div>
            <button type="submit" className="btn btn-success">Thêm phim</button>
            <button type="button" className="btn btn-success ml-3">Lưu</button>
        </form>

    )
}
