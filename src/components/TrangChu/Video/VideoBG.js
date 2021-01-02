import React from 'react';

export default function VideoBG() {
    return (
        <div>
            <section className="commingSoon py-5">
                <div className="comingSoon__bg" />
                <div className="container">
                    <div className="commingSoon__content">
                        <h3 className="text-white title">COOMING SOON</h3>
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6">
                                <p className="commingSoon__type">Drama, Thriller</p>
                                <h3 className="commingSoon__title">Deepwater Horizon</h3>
                                <div className="comingSoon__ratingDate">
                                    <div className="comingSoon__start mr-3">
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                        <i className="fa fa-star" />
                                    </div>
                                    <div className="comingSoon__date">
                                        <i className="fa fa-calendar mr-2" /> 30 September, 2017
                                    </div>
                                </div>
                                <p className="comingSoon__des mt-3">A dramatization of the April 2010 disaster, when the offshore drilling rig Deepwater Horizon exploded and created the worst oil spill in U.S. history.</p>
                                <a href="#" className="comingSoon__moreinfo">More info <i className="fa fa-angle-right" /></a>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6">
                                <div className="commingSoon__trainer">
                                    <img src="./img/slide-3-video.png" alt="Video" className="img-fluid" />
                                    {/* <i className="fa fa-play" data-toggle="modal" data-target="#trainer" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
