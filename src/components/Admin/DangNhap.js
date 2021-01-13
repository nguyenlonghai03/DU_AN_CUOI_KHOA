import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { dangNhapAction } from '../../redux/actions/QuanLyNguoiDungActions'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';


// import { history } from '../../util/history'


const signInUserSchema = yup.object().shape({
    taiKhoan: yup.string().required('*Field is required'),
    matKhau: yup.string().required('*Field is required')
})

export default function DangNhap(props) {
    // console.log("HIS", history)
    const dispatch = useDispatch()

    // console.log('props trang login', props); // props của route

    const [userLogin, setUserLogin] = useState({ taiKhoan: "", matKhau: "" })
    // console.log(userLogin)
    // const handleChange = (e) => {
    //     let { value, name } = e.target;
    //     setUserLogin({ ...userLogin, [name]: value })

    // }


    // const handleSubmit = (e) => {
    //     e.preventDefault(); // Chặn sự kiện reload của browser

    //     dispatch(dangNhapAction(userLogin));

    // }


    return (
        <Formik

            initialValues={{
                taiKhoan: '',
                matKhau: ''
            }}
            validationSchema={signInUserSchema}
            onSubmit={(values) => {
                // console.log(values)
                dispatch(dangNhapAction(values));
            }}
            render={({ handleChange }) => {
                return <Form action="#" className="sign-in-formF">
                    <h2 className="titleF">Sign in</h2>
                    <div className="input-fieldF">
                        <i className="fas fa-user" />
                        <Field name="taiKhoan" type="text" placeholder="Username" onChange={handleChange} />
                    </div>
                    <ErrorMessage name="taiKhoan" >{msg => <div className="alert alert-danger text-left">{msg}</div>}</ErrorMessage>

                    <div className="input-fieldF">
                        <i className="fas fa-lock" />
                        <Field name="matKhau" type="password" placeholder="Password" onChange={handleChange} />
                    </div>
                    <ErrorMessage name="matKhau" >{msg => <div className="alert alert-danger text-left">{msg}</div>}</ErrorMessage>


                    <input type="submit" value="Login" className="btnF solid" />
                    <p className="social-textF">Or Sign in with social platforms</p>
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
