import React from "react";
import "./index";
import $ from "jquery";

export default function Carousel() {
  return (
    <div className="slider3d first">
      <div className="slider3d__wrapper">
        <div className="slider3d__inner">
          <div className="slider3d__rotater">
            <div className="slider3d__item">
              <h4 className="slider3d__heading" data-text="SO HEADING"></h4>

              <i className="playButton fab fa-google-play"></i>
            </div>
            <div className="slider3d__item">
              <h4 className="slider3d__heading" data-text="MUCH ROTATION"></h4>
              <i className="playButton fab fa-google-play"></i>
            </div>
            <div className="slider3d__item" style={{ position: "relative" }}>
              <h4 className="slider3d__heading" data-text="VERY 3D"></h4>
              <i className="playButton fab fa-google-play"></i>
            </div>
            <div className="slider3d__item">
              <h4
                className="slider3d__heading"
                data-text="SUCH JAVASCRIPT"
              ></h4>
              <i className="playButton fab fa-google-play"></i>
            </div>
            <div className="slider3d__item">
              <h4 className="slider3d__heading" data-text="WOW WOW!"></h4>
              <i className="playButton fab fa-google-play"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="slider3d__controls">
        <div className="slider3d__handle">
          <div className="slider3d__handle__inner">
            <div className="slider3d__handle__rotater">
              <div className="slider3d__handle__item active">Page 1</div>
              <div className="slider3d__handle__item">Page 2</div>
              <div className="slider3d__handle__item">Page 3</div>
              <div className="slider3d__handle__item">Page 4</div>
              <div className="slider3d__handle__item">Page 5</div>
            </div>
          </div>
        </div>
        <div className="slider3d__control m--up" />
        <div className="slider3d__control m--down" />
      </div>
    </div>
  );
}
