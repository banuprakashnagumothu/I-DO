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
                    <div className="banner" style={{ background: "#999 url('/assets/img/all-members.png') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/5.jpg') no-repeat center / cover" }}>
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/6.jpg') no-repeat center / cover" }} >
                    </div>
                    <div className="banner" style={{ background: "#999 url('/assets/img/banner/7.jpg') no-repeat center / cover" }} >
                    </div>

                </Carousel>
            </section>
            <section className="" id="about">
                <div className="container">
                    <div className="section-header col-lg-8">
                        <h1>
                            Vision and Mission
                        </h1>
                        <p className="sub-title title-before"> Vision: the vision of I-DO is to reach the hitherto unreached tribal population and provide them
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
                            <div className="col-md-3 col-lg-3 col-12 mt-3">
                                <NavLink to={'/services/health-care'}>

                                    <div className="services-inner primary-health-care">
                                        <div className="mb-2"><img src='/assets/img/primary-health-care-ico.png' /></div>
                                        <h4>Health Care</h4>
                                    </div>
                                </NavLink>

                            </div>
                            <div className="col-md-3 col-lg-3 col-12 mt-3">
                                <NavLink to={'/services/nutrition'}>

                                    <div className="services-inner nutrition">
                                        <div className="mb-2"><img src='/assets/img/nutrition-ico.png' /></div>
                                        <h4>Nutrition</h4>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-3 col-lg-3 col-12 mt-3">
                                <NavLink to={'/services/education'}>

                                    <div className="services-inner education">
                                        <div className="mb-2"><img src='/assets/img/education-ico.png' /></div>
                                        <h4>Education</h4>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-md-3 col-lg-3 col-12 mt-3">
                                <NavLink to={'/services/other-initiatives'}>

                                    <div className="services-inner sustainable-health">
                                        <div className="mb-2"><img src='/assets/img/sustainable-health-ico.png' /></div>
                                        <h4>Other Initiatives</h4>
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
                            <Ticker className="service-count" end={110} />
                            <div className="service-count-name">Habitations Reached</div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={101} />
                            <div className="service-count-name">Community Health Workers Trained</div>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={53000} />
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
                                Bridge Schools </div>
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
                        <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">
                            <Ticker className="service-count" end={72} />
                            <div className="service-count-name">
                                Surgeries Added
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
                                    <span className='fw-bold'>How we achieved Zero maternal Deaths?</span>
                                    <p> In 2021, there were 3 maternal deaths out of 151 live births in the 43 tribal habitations. In 2022, there were 192 live births from 51 tribal habitations.</p>
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

                                    <div className='row align-items-center mt-2 mb-2'>
                                        <div className='col-6'>
                                            <p>This also reflects the need of NUTRITION POWDER and COMMUNITY HEALTH WORKERS
                                                in the interior tribal habitations to save the lives of severe acute malnutrition (SAM) babies.</p>
                                        </div>
                                        <div className='col-6'>
                                            <img src="../../assets/img/storiesofchangefinal/1.jpg" className="img-thumbnail rounded nutri-img" />
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className='fw-bold'>CASE OF SEVERE ANEMIA.</span>
                                    <div className='row'>
                                        <div className='col-6'>
                                            <p>HB: 5.1 grams/dL <br />
                                                “MOBILE MEDICAL UNIT”<br />
                                                REACHING THE INTERIOR TRIBAL HABITATIONS DATE:</p>
                                            <p>
                                                21-01-2022 RAVVA GANGA <br />
                                                AGE: 16 Years <br />
                                                HABITATION: Bendalpad.
                                            </p>
                                            <ul>
                                                <li>40 KMS from kothagudem government hospital.</li>
                                                <li>Our MOBILE MEDICAL UNIT TEAM identified the patient with severe anaemia & fever since
                                                    15 days.</li>
                                                <li>Admitted to GOVT hospital & blood transfusion done twice. Thankful to the blood donors for
                                                    coming forward & responding immediately.</li>
                                            </ul>
                                        </div>
                                        <div className='col-6'>
                                            <span className='fw-bold'>ANEMIA CASE 2:</span>
                                            <p>
                                                Patient name - Madhavi Samakka <br />
                                                Tribal habitation -Sirthanpadu <br />
                                                HB :1 gram/dl diagnosed through our medical kits <br />
                                                She was a victim of black magic . <br />
                                                She was counselled and admitted into government hospital at Bhadrachalam <br />
                                                But she fled from the hospital . <br />
                                                Finally she was counselled and 2 units of blood transfusion was done and supplements were <br />
                                                provided for her recovery

                                            </p>
                                            <p>
                                                <span className='fw-bold'>IMPACT</span> - Her HB has now improved to 11.9 grams/dl <br />
                                                Happy to mension that today she works as a “community health worker” <br />
                                                Serving the needy at her habitation <br />
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionservices-count-list">
                <div className="container">
                    <div className='row mt-3 mb-3 align-items-center'>
                        <h2>Volunteering</h2>
                        <div className='col-12 col-lg-8'>
                            <h4>Construction Work</h4>
                            <p>Inspired by the efforts put in by the organisation IDO to improve peoples health, the indigenous
                                community of Kranti Nagar volunteered to work for the I-DO Health Centre. The community had
                                sacrificed their daily wage labour to build a health facility for themselves. More than 6231 people
                                volunteered for the facility. This has reduced the overall construction cost of the building by
                                significant margin. In this way they own it .With a functional health facility now at the remotest
                                location and the services it is providing, it has become a boon for the local community .
                            </p>
                        </div>
                        <div className='col-12 col-lg-4 text-right'>
                        <img src="../../assets/img/fwdvolunteeringinternship/1.jpg" className="img-thumbnail rounded nutri-img" />
                        </div>
                    </div>
                    <div className='row mb-3 align-items-center'>
                        <div className='col-6'>
                        <img src="../../assets/img/fwdvolunteeringinternship/2.jpg" className="img-thumbnail rounded nutri-img" />
                        </div>
                        <div className='col-6'>
                        <img src="../../assets/img/fwdvolunteeringinternship/3.jpg" className="img-thumbnail rounded nutri-img" />
                        </div>
                    </div>
                    <div className='row'>
                    <h4>Health Work</h4>
                    <div className='col-12'>
                            <p>This indigenous community was home to lot of preventable deaths. This regular suffering
                                experienced created a desperation among the community to work towards betterment of their
                                healthcare. Seeing an opportunity in I-DO, many people have undergone training to provide
                                basic health services at hamlet level. There are instances where emergency deliveries were
                                also conducted by the trained community health workers. They played the role of barefoot
                                doctors. By acting as a point of contact between the organisation and the indigenous people,
                                the community Health Workers form a strong foundation for I-DO.

                            </p>
                        </div>
                        <div className='col-6'>
                        <img src="../../assets/img/fwdvolunteeringinternship/4.jpg" className="img-thumbnail rounded nutri-img" />

                        </div>
                        <div className='col-6'>
                        <img src="../../assets/img/fwdvolunteeringinternship/5.jpg" className="img-thumbnail rounded nutri-img" />
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