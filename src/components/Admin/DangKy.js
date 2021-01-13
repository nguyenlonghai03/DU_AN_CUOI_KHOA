import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux';
import { dangKyApi } from '../../redux/actions/QuanLyNguoiDungActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


const signUpSchema = yup.object().shape({
    taiKhoan: yup.string().required('*Field is required'),
    matKhau: yup.string().required('*Field is required'),
    email: yup.string().email('*Email is invalid').required('*Field is required'),
    soDt: yup.string().matches(/^[0-9]+$/, 'Malformed').required('*Field is required'),
    hoTen: yup.string().required('*Field is required')
})

export default function DangKy() {

    const dispatch = useDispatch();
    // const [state, setState] = useState({
    //     taiKhoan: '',
    //     matKhau: '',
    //     email: '',
    //     soDt: '',
    //     maNhom: 'GP03',
    //     maLoaiNguoiDung: 'KhachHang',
    //     hoTen: ''
    // })

    // const handleChange = e => {
    //     const { name, value } = e.target;


    //     // Validation ở đây

    //     setState({
    //         ...state,
    //         [name]: value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     let objLogout = state;
    //     // console.log("obj", objLogout)
    //     dispatch(dangKyApi(objLogout))
    // }



    return (
        <Formik
            initialValues={{
                taiKhoan: '',
                matKhau: '',
                email: '',
                soDt: '',
                maNhom: 'GP03',
                maLoaiNguoiDung: 'KhachHang',
                hoTen: ''
            }}
            validationSchema={signUpSchema}
            onSubmit={(values) => {
                // console.log("values", values)
                dispatch(dangKyApi(values))
            }}
            render={({ handleChange }) => {
                return <Form action="#" className="sign-up-form" >
                    <h2 className="titleF">Sign up</h2>
                    <div className="input-fieldF">
                        <i className="fas fa-user" />
                        <div className="d-flex">
                            <Field name="taiKhoan" type="text" placeholder="Username" onChange={handleChange} />
                            <ErrorMessage name="taiKhoan" >{msg => <p className="text-danger pt-2">{msg}</p>}</ErrorMessage>
                        </div>
                    </div>
                    <div className="input-fieldF">
                        <i className="fas fa-lock" />
                        <div className="d-flex">
                            <Field name="matKhau" type="password" placeholder="Password" onChange={handleChange} />

                            <ErrorMessage name="matKhau" >{msg => <div className="text-danger pt-2">{msg}</div>}</ErrorMessage>
                        </div>
                    </div>
                    <div className="input-fieldF">
                        <i className="fas fa-envelope" />
                        <div className="d-flex">

                            <Field name="email" type="email" placeholder="Email" onChange={handleChange} />
                            <ErrorMessage name="email" >{msg => <div className="text-danger pt-2">{msg}</div>}</ErrorMessage>
                        </div>

                    </div>

                    <div className="input-fieldF">
                        <i className="fas fa-phone" />
                        <div className="d-flex">
                            <Field name="soDt" type="text" placeholder="Phone number" onChange={handleChange} />
                            <ErrorMessage name="soDt" >{msg => <div className="text-danger pt-2">{msg}</div>}</ErrorMessage>
                        </div>
                    </div>

                    <div className="input-fieldF">
                        <i className="fas fa-user" />
                        <div className="d-flex">
                            <Field name="hoTen" type="text" placeholder="Full name" onChange={handleChange} />
                            <ErrorMessage name="hoTen" >{msg => <div className="text-danger pt-2">{msg}</div>}</ErrorMessage>
                        </div>
                    </div>

                    <input type="submit" className="btnF" defaultValue="Sign up" />
                    {/* <p className="social-textF">Or Sign up with social platforms</p> */}
                    <div className="social-mediaF">
                        <a href="#" className="social-iconF">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a href="#" className="social-iconF">
                            <i className="fab fa-twitter" />
                        </a>
                        <a href="#" className="social-iconF">
                            <i className="fab fa-google" />
                        </a>
                        <a href="#" className="social-iconF">
                            <i className="fab fa-linkedin-in" />
                        </a>
                    </div>
                </Form>
            }} />

    )
}
