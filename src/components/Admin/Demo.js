import React, { useEffect } from 'react'
import $ from 'jquery'
import DangNhap from './DangNhap';
import DangKy from './DangKy';

export default function Demo() {
    useEffect(() => {
        (function () {
            const sign_in_btnF = document.querySelector("#sign-in-btnF");
            const sign_up_btnF = document.querySelector("#sign-up-btnF");
            const containerF = document.querySelector(".containerF");
            console.log("SI", sign_in_btnF)
            console.log("SI", sign_up_btnF)
            console.log("SI", containerF)

            sign_up_btnF.addEventListener("click", () => {
                containerF.classList.add("sign-up-mode");
            });

            sign_in_btnF.addEventListener("click", () => {
                containerF.classList.remove("sign-up-mode");
            });


        })()
    }, [])

    return (
        <>
            <div id="demo">
                <div className="containerF">
                    <div className="forms-containerF">
                        <div className="signin-signupF">
                            <DangNhap></DangNhap>
                            <DangKy></DangKy>
                        </div>
                    </div>
                    <div className="panels-containerF">
                        <div className="panelF left-panelF">
                            <div className="contentF">
                                <h3 style={{ color: 'white' }}>New here ?</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                    ex ratione. Aliquid!
        </p>
                                <button className="btnF transparent" id="sign-up-btnF">
                                    Sign up
        </button>
                            </div>
                            <img src="./img/log.svg" className="image" alt />
                        </div>
                        <div className="panelF right-panelF">
                            <div className="contentF">
                                <h3>One of us ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    laboriosam ad deleniti.
        </p>
                                <button className="btnF transparent" id="sign-in-btnF">
                                    Sign in
        </button>
                            </div>
                            <img src="./img/register.svg" className="image" alt />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
