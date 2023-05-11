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
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/avatar-person.svg"} />
                                        </div>
                                        <h2>Mr Mogili Vijender</h2>
                                        <span>Vice President</span>
                                        <span>Development Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Dr Narendar R.jpg"} />
                                        </div>
                                        <h2>Dr Narendar R</h2>
                                        <span>General Secretary</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Mallikarjuna rao.png"} />
                                        </div>
                                        <h2>Mr Mallikarjuna Rao</h2>
                                        <span>Joint Secretary</span>
                                        <span>Private Business</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/avatar-person.svg"} />
                                        </div>
                                        <h2>Mr Mahesh M</h2>
                                        <span>Treasurer</span>
                                        <span>IT Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/avatar-person.svg"} />
                                        </div>
                                        <h2>Mr V Radhakrishna Murthy</h2>
                                        <span>Executive Member</span>
                                        <span>IT Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Sureshreddy.jpg"} />
                                        </div>
                                        <h2>Dr CH Suresh Reddy</h2>
                                        <span>Executive Member</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Kapil Sharma.jpg"} />
                                        </div>
                                        <h2>Dr Kapil Sharma</h2>
                                        <span>Core Member</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Archana.jpeg"} />
                                        </div>
                                        <h2>Dr K Archana</h2>
                                        <span>Core Member</span>
                                        <span>Medical Professional</span>
                                    </div>
                                    <div className="team-item">
                                        <div className="team-img">
                                            <img className='team-img-src' src={process.env.PUBLIC_URL + "/assets/img/team/Swathi.jpg"} />
                                        </div>
                                        <h2>Dr Swathi B</h2>
                                        <span>Core Member</span>
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