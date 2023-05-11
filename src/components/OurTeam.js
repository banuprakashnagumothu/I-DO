import React, { useState } from 'react';
import Footer from "./Footer";
function OurTeam() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                    Our Team

                            </li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Our Team
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="team-wrapper">
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/RavindraRao.JPG"} />
                                        </div>
                                        <h2>Dr N Ravindra Rao</h2>
                                        <span>President</span>
                                        <span>Medical Professional</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </React.Fragment>
    )
}

export default OurTeam;