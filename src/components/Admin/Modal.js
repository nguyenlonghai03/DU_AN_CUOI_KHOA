import React from 'react'

export default function Modal() {
    return (
        //         <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId">
        //   Launch
        // </button>
        <div style={{ width: '100%', height: '100%' }} className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content" style={{ width: '600px' }}>
                    <div className="modal-header">
                        <h5 className="modal-title">

                            Thông tin lịch chiếu của phim gì đó

                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">

                                <select className="form-group">
                                    <option>
                                        Chọn hệ thống rạp
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                </select>
                                <span>
                                    Chọn ngày giờ chiếu
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                                <select className="form-group">
                                    <option>
                                        Chọn cụm rạp
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                </select>
                                <span>
                                    Chọn thời lượng phim
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">

                                <select className="form-group">
                                    <option>
                                        Chọn rạp
                                    </option>
                                    <option>
                                        1
                                    </option>
                                    <option>
                                        2
                                    </option>
                                </select>
                                <span>
                                    Mã nhóm: GP03
                                </span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <span>Giá vé</span><input type="text" className="form-control" />
                            </div>
                        </div>
                        <div className="row">
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
                        </div>

                        <button className="btn btn-success">Thêm lịch chiếu</button>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>


    )
}

