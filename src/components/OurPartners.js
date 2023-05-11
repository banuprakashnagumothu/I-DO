import React, { useState } from 'react';
import Footer from "./Footer";
function OurPartners() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                    Our Partners

                            </li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Our Partners
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <div className="team-wrapper">
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>1968 Batch, Gandhi Medical college NRI doctors</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>Association for India’s Development (AID - USA)</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Bring_A_Smile.png"} />
                                        </div>
                                        <h2>Bring a Smile Foundation</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>Doctors Team Global Hospital-LB Nagar</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>Dr Shirin Pinto (USA)</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/F6_Architects.png"} />
                                        </div>
                                        <h2>F6 Architects</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>IMA Women’s wing -Nalgonda</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/InnerWheelClub_Warangal.png"} />
                                        </div>
                                        <h2>Inner Wheel Club, Waranagal</h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Issar_Pharma.png"} />
                                        </div>
                                        <h2><a href='https://issar.co.in/' target='_blank'>Issar Pharmaceuticals Pvt Ltd</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Karuna_Trust.jpg"} />
                                        </div>
                                        <h2><a href='https://www.karunatrust.org/' target='_blank'> Karuna Trust</a></h2>
                                        <span><i class="fa fa-globe" aria-hidden="true"></i> <a href='' target='_blank'></a></span>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Netcracker.png"} />
                                        </div>
                                        <h2><a href='https://www.netcracker.com/' target='_blank'> Netcracker Technology Solutions Pvt Ltd</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Nisvartha.png"} />
                                        </div>
                                        <h2><a href='https://www.nisvartha.org/' target='_blank'>Nisvartha Foundation</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Pragathi.png"} />
                                        </div>
                                        <h2><a href='https://www.globalpragathi.com/' target='_blank'>Pragati welfare society</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Qvantel.png"} />
                                        </div>
                                        <h2>Qvantel Software Solution Ltd</h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Robinhood_Army.png"} />
                                        </div>
                                        <h2> <a href='https://robinhoodarmy.com/' target='_blank'>Robin Hood Army Hyderabad</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Rural_Hope_Foundation.png"} />
                                        </div>
                                        <h2><a href='https://ruralhopefoundation.org/' target='_blank'>Rural Hope Foundation(USA)</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/Samaritan_ForTheNation.jpeg"} />
                                        </div>
                                        <h2>Samaritans - For the Nation</h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>Save the Child Foundation</h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/partner-icon.png"} />
                                        </div>
                                        <h2>Street NGO</h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/TechieRide.png"} />
                                        </div>
                                        <h2>TechieRide</h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/TNR_Trust.jpeg"} />
                                        </div>
                                        <h2><a href='https://tnrtrust.org/' target='_blank'>TNR Trust</a></h2>
                                    </div>
                                    <div className="team-item partner-item">
                                        <div className="team-img">
                                            <img className='team-img-src partner-img-src' src={process.env.PUBLIC_URL + "/assets/img/partners/UnitedCareDevelopmentService.png"} />
                                        </div>
                                        <h2><a href='https://yousee.one/' target='_blank'>United care development services ( Panjagutta)</a></h2>
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

export default OurPartners;