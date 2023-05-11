import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Ticker from '../ticker';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="position-relative" id="banner">
                <Carousel infiniteLoop={true} autoPlay={true} showStatus={false}>

                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/1.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/2.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/3.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/4.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/5.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/6.jpg') no-repeat center / cover" }} >
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/7.jpg') no-repeat center / cover" }} >
                    </div>

                </Carousel>
            </section>
            <section className="section" id="about">
                <div className="container">
                    <div className="section-header col-lg-8">
                        <h1>
                            Vision and Mission
                        </h1>
                        <p className="sub-title title-before"> Vision: the vision of I-do is to reach the hitherto unreached tribal population and provide them
                            with essential health and nutrition services to lead a healthy life
                        </p>
                        <p className="sub-title title-before"> Mission
                            <ol>
                                <li>Delivering healthcare and nutritional services to tribal areas</li>
                                <li>Training and Capacity building of Doctors and Community Healthcare Workers (CHWs) to
                                    cater to tribals</li>
                                <li>Undertake research with tribal communities on improving the well-being of the community.</li>
                                <li>Create sustainable livelihood for the indigenous population</li>
                            </ol>
                        </p>
                    </div>
                </div>
            </section>

            <section className="section bg-white" id="services">
                <div className="container-fluid">
                    <div className="container">
                        {/* <div className="section-header">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <h1 className="text-capitalize">Indigenous development organisation</h1>
                                </div>
                                <div className="col-lg-8">
                                    <div className="section-desc sub-title ps-5">
                                        We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden.
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="row text-center">
                       <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/service1.png"} className="img-fluid" />
                                    </div>
                                    <h2>Donate</h2>
                                    <a href="#">Duis</a>
                                </div>
                            </div>
                        
                            
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/service2.png"} className="img-fluid" />
                                    </div>
                                    <h2>Donate</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-box">
                                    <div className="service-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/service3.png"} className="img-fluid" />
                                    </div>
                                    <h2>Fundraise</h2>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla </p>
                                    <a href="#">Learn More</a>
                                </div>
                            </div>
                        </div> */}
                        <div className='row text-center'>
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                                <NavLink to={'/services/primary-health-care'}>

                                    <div className="services-inner primary-health-care">
                                        <div className="mb-2"><img src='/assets/img/primary-health-care-ico.png' /></div>
                                        <h4>Primary Health Care</h4>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                                <NavLink to={'/services/nutrition'}>

                                    <div className="services-inner nutrition">
                                        <div className="mb-2"><img src='/assets/img/nutrition-ico.png' /></div>
                                        <h4>Nutrition</h4>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                                <NavLink to={'/services/education'}>

                                    <div className="services-inner education">
                                        <div className="mb-2"><img src='/assets/img/education-ico.png' /></div>
                                        <h4>Education</h4>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sectionservices-count-list">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={90} />
                            <div className="service-count-name">Habitations Reached</div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={61} />
                            <div className="service-count-name">Community Health Workers Trained</div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={45000} />
                            <div className="service-count-name">Patients covered</div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={2000} />+
                            <div className="service-count-name">
                                Nutrition beneficiaries/month
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={14} />
                            <div className="service-count-name">
                                Bridge School </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={432} />
                            <div className="service-count-name">
                                Mid day meals provided daily
                            </div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={3400} /> families
                            <div className="service-count-name">
                                Mosquito Nets Distributed
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section>
            <div className="container">
                <div className='row mt-3 mb-3'>
                    <div className='col-12 text-center'>
                        <div className="banner-text">
                            <h3>
                                Your contribution <span>can help achieve a solution</span>
                            </h3>
                            <NavLink to={process.env.PUBLIC_URL + '/become-a-volunteer'} activeClassName="active">
                                <button className="btn banner_actionbtn">
                                Become a volunteer
                                </button>
                            </NavLink>
                            <NavLink to={process.env.PUBLIC_URL + '/donate'} activeClassName="active">
                                <button className="btn banner_actionbtn">
                                    Donate Now
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                </div>
            </section>

        </React.Fragment>
    )
}

export default Home;