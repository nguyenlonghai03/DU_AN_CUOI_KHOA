import React from 'react'

export default function DangKy() {
    return (
        <form action="#" className="sign-up-form">
            <h2 className="titleF">Sign up</h2>
            <div className="input-fieldF">
                <i className="fas fa-user" />
                <input type="text" placeholder="Username" />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-envelope" />
                <input type="email" placeholder="Email" />
            </div>
            <div className="input-fieldF">
                <i className="fas fa-lock" />
                <input type="password" placeholder="Password" />
            </div>
            <input type="submit" className="btnF" defaultValue="Sign up" />
            <p className="social-textF">Or Sign up with social platforms</p>
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
        </form>
    )
}
