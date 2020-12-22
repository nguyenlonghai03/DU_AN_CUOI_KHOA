import React, { Fragment, useEffect } from 'react'
export default function ThongTinCaNhan() {

    return (

        <Fragment>
            <div className="container" data-spy="scroll" >
                <main >
                    <h1>CSS Tabs Revisited</h1>
                    <input id="radio1" type="radio" name="css-tabs" defaultChecked />
                    <input id="radio2" type="radio" name="css-tabs" />
                    <div id="tabs" className="d-flex">
                        <label id="tab1" htmlFor="radio1">Home</label>
                        <label id="tab2" htmlFor="radio2" >Services</label>
                    </div>
                    <div id="content" >
                        <section id="content1" className="mt-2">
                            <div className="row" style={{ position: 'relative', height: '400px', overflowX: 'hidden' }}>
                                <div className="col-md-12 d-flex m-3" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div className="col-md-6" >
                                            <span>Tên phim</span>
                                            <span>Thời lượng</span>
                                            <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 d-flex m-3" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div className="col-md-6" >
                                            <span>Tên phim</span>
                                            <span>Thời lượng</span>
                                            <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 d-flex m-3" >
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src="https://picsum.photos/200/200" style={{ width: "150px", height: "150px" }} />
                                        </div>
                                        <div className="col-md-6" >
                                            <span>Tên phim</span>
                                            <span>Thời lượng</span>
                                            <button className="btn btn-danger" style={{ cursor: "pointer" }}>Hủy</button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </section>
                        <section id="content2">
                            <h3 className="p-0">Something Clever</h3>
                            <p className="p-0 m-0">Aliquam condimentum hendrerit nisi, nec vestibulum mi feugiat ut. Donec lobortis nisi neque, in egestas eros venenatis eu. Vestibulum nulla nisi, venenatis at pretium id, fermentum quis risus. Quisque porta suscipit neque eu placerat. Etiam scelerisque, quam in sodales iaculis, velit velit mattis nunc, quis dapibus massa elit nec enim. Vivamus quis libero aliquam, volutpat nisl sed, consectetur ante.</p>
                            <p className="p-0 m-0">Donec aliquam semper felis, in placerat leo blandit in. Integer interdum elit quis felis tempor venenatis. In faucibus ac mauris id commodo. Proin in sapien tincidunt, luctus mi id, bibendum dui. Nunc tincidunt libero ut purus vehicula, sit amet tincidunt mi sollicitudin. Donec varius erat magna, sed convallis purus adipiscing ut. Duis sagittis ut leo ut auctor. Ut convallis nisl nec purus sollicitudin, nec iaculis felis rutrum. </p>
                        </section>
                    </div>

                </main>
            </div>

        </Fragment>

    )
}
