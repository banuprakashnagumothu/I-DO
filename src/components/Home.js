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
                        <div className='col-12'>
                            <h3>Stories of Change</h3>
                            <ol>
                                <li>
                                    <span className='fw-bold'>How we achieved zero Maternal deaths ?</span>
                                    <p>  In 2021, there were 3 maternal deaths out of 250+ pregnancies in the 43 tribal habitations. In
                                        2022, there were 295 pregnant women from 51 tribal habitations. Fortunately no maternal
                                        deaths occurred in 2022. This was made possible through the following steps:</p>
                                    <ol>
                                        <li>
                                            Identifying the local youth from each tribal habitation who are willing to volunteer for their
                                            community. These community health workers are trained on various maternal & child
                                            health aspects .
                                        </li>
                                        <li>These trained health workers are now equipped to identify & treat the sick individuals at
                                            their door-step within the habitation, making health services accessible to everyone.</li>
                                        <li>Iron-sucrose infusion done at door-step for several anemic pregnant women</li>
                                        <li>Monthly Seemantham Program (Baby Shower Event) conducted in the premises of IDO
                                            Health Centre .In this process, we conduct a 1 hour health education session & also do
                                            complete antenatal checkup of all the pregnant women at our health centre,</li>
                                        <li>
                                            High-risk pregnancies are identified and necessary intervention is planned accordingly.
                                            Early diagnosis & timely treatment are always the key to good health
                                        </li>
                                    </ol>
                                </li>
                                <li><span className='fw-bold'>IMPACT OF NUTRITION PROGRAM</span>
                                    <p>This also reflects the need of NUTRITION POWDER and COMMUNITY HEALTH WORKERS
                                        in the interior tribal habitations to save the lives of severe acute malnutrition (SAM) babies.</p>
                                </li>
                                <li>
                                    <span className='fw-bold'>CASE OF SEVERE ANEMIA.</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionservices-count-list">
                <div className="container">
                    <div className='row mt-3 mb-3'>
                        <h2>Volunteering</h2>
                        <div className='col-12'>
                            <h4>Construction Work</h4>
                            <p>Inspired by the efforts put in by the organisation IDO to improve peoples health, the indigenous
                                community of Kranti Nagar volunteered to work for the I-DO Health Centre. The community had
                                sacrificed their daily wage labour to build a health facility for themselves. More than 6231 people
                                volunteered for the facility. This has reduced the overall construction cost of the building by
                                significant margin. In this way they own it .With a functional health facility now at the remotest
                                location and the services it is providing, it has become a boon for the local community .
                            </p>
                        </div>
                        <div className='col-12'>
                            <h4>Health Work</h4>
                            <p>This indigenous community was home to lot of preventable deaths. This regular suffering
                                experienced created a desperation among the community to work towards betterment of their
                                healthcare. Seeing an opportunity in I-DO, many people have undergone training to provide
                                basic health services at hamlet level. There are instances where emergency deliveries were
                                also conducted by the trained community health workers. They played the role of barefoot
                                doctors. By acting as a point of contact between the organisation and the indigenous people,
                                the community Health Workers form a strong foundation for I-DO.

                            </p>
                        </div>
                        <div className='col-12'>
                            <h4>Construction Work</h4>
                            <p>Inspired by the efforts put in by the organisation IDO to improve peoples health, the indigenous
                                community of Kranti Nagar volunteered to work for the I-DO Health Centre. The community had
                                sacrificed their daily wage labour to build a health facility for themselves. More than 6231 people
                                volunteered for the facility. This has reduced the overall construction cost of the building by
                                significant margin. In this way they own it .With a functional health facility now at the remotest
                                location and the services it is providing, it has become a boon for the local community .
                            </p>
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
                                    <p>Your contribution <span className='fw-bold'>can help achieve a solution</span></p>
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