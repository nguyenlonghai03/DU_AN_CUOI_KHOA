import React from 'react';
import $ from 'jquery';
import './carouselLibrary.js';

export default function Carousel() {
    return (
        <div className="slider3d first">
            <div className="slider3d__wrapper">
                <div className="slider3d__inner">
                    <div className="slider3d__rotater">
                        <div className="slider3d__item">
                            <h2 className="slider3d__heading" data-text="SO HEADING">SO HEADING</h2>
                        </div>
                        <div className="slider3d__item">
                            <h2 className="slider3d__heading" data-text="MUCH ROTATION">MUCH ROTATION</h2>
                        </div>
                        <div className="slider3d__item">
                            <h2 className="slider3d__heading" data-text="VERY 3D">VERY 3D</h2>
                        </div>
                        <div className="slider3d__item">
                            <h2 className="slider3d__heading" data-text="SUCH JAVASCRIPT">SUCH JAVASCRIPT</h2>
                        </div>
                        <div className="slider3d__item">
                            <h2 className="slider3d__heading" data-text="WOW WOW!">WOW WOW!</h2>
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

    )
}
