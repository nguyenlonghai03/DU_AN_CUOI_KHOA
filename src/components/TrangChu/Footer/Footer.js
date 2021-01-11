import React from "react";
// import './Footer.css'
export default function Footer() {
  return (

    <div className="new_footer_area bg_color text-center" style={{ backgroundColor: 'black' }}>
      <div className="new_footer_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6">
              <div
                className="f_widget company_widget wow fadeInLeft"
                data-wow-delay="0.2s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18 text-center">
                  CyberSoft
                </h3>
                <p>
                  FAQ
                </p>
                <p>
                  Brand Guidelines
                </p>
                <form
                  action="#"
                  className="f_subscribe_two mailchimp"
                  method="post"
                  noValidate="true"
                  _lpchecked={1}
                >
                  <input
                    type="text"
                    name="EMAIL"
                    className="form-control memail"
                    placeholder="Email"
                  />
                  <button className="btn btn_get btn_get_two" type="submit">
                    Subscribe
                  </button>
                  <p
                    className="mchimp-errmessage"
                    style={{ display: "none" }}
                  />
                  <p
                    className="mchimp-sucmessage"
                    style={{ display: "none" }}
                  />
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.4s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.4s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18 text-center">About</h3>
                <ul className="list-unstyled f_list">
                  <li>
                    <a href="#">Thỏa thuận sử dụng</a>
                  </li>
                  <li>
                    <a href="#">Quy chế hoạt động</a>
                  </li>
                  <li>
                    <a href="#">Chính sách bảo mật</a>
                  </li>
                  <li>
                    <a href="#">Quyền lợi thành viên</a>
                  </li>

                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div
                className="f_widget about-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.6s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.6s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18 text-center">Đối tác</h3>
                <div>
                  <img src="../img/LogoF.png" style={{ margin: "0 auto", width: '90%', height: "100%" }} />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="f_widget social-widget pl_70 wow fadeInLeft"
                data-wow-delay="0.8s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.8s",
                  animationName: "fadeInLeft",
                }}
              >
                <h3 className="f-title f_600 t_color f_size_18 text-center">
                  Social
                </h3>
                <div className="f_social_icon">
                  <a href="#" className="fab fa-facebook" />
                  <a href="#" className="fab fa-twitter" />
                  <a href="#" className="fab fa-linkedin" />
                  <a href="#" className="fab fa-pinterest" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bg">
          <div className="footer_bg_one" />
          <div className="footer_bg_two" />
        </div>
      </div>
      <div className="footer_bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
              <p className="mb-0 f_400">
                © cakecounter Inc.. 2019 All rights reserved.
              </p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
              <p>
                Made with <i className="icon_heart" /> in{" "}
                <a href="#">CakeCounter</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
