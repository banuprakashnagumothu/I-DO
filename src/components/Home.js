import React ,{ useState }from 'react';
import { NavLink } from 'react-router-dom';
import  Ticker from '../ticker';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 function Home() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
            <section className="position-relative" id="banner">
            <Carousel infiniteLoop={true} autoPlay={true} showStatus={false}>

                <div className="banner" style={{background: "#999 url('/assets/img/banner/community_healty_worker_training.jpg') no-repeat center / cover"}}>
            </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/bridge_school.jpg') no-repeat center / cover"}}>
            </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/filters.jpg') no-repeat center / cover"}}>
                </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/malnutrition.jpg') no-repeat center / cover"}}>
              </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/health_camp.jpg') no-repeat center / cover"}}>
             </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/nutrition_powder_spot_feeding.jpg') no-repeat center / cover"}} >
            </div>
            <div className="banner" style={{background: "#999 url('/assets/img/banner/mother_child_health_cards.jpg') no-repeat center / cover"}} >
            </div>
          
            </Carousel>
            <div className="container-fluid banner-text-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="banner-text">
                                    <h3>
                                        Your contribution <span>can help achieve a solution</span>
                                    </h3>
                                    {/* <p>
                                    Malnutrition
                                    </p> */}
                                                                        <button className="btn banner_actionbtn">
                                        Become a volunteer
                                    </button>
                                      <NavLink to={process.env.PUBLIC_URL+'/donate'} activeClassName="active">   <button className="btn banner_actionbtn">
                                    Donate Now
                                </button>
                                </NavLink>
                           
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
           
            </section>
            <section className="section" id="about">
                <div className="container">
                    <div className="section-header col-lg-7">
                        <h1>
                            Who We Are
                        </h1>
                        <p className="sub-title title-before"> We work with an objective of providing universal, affordable & comprehensive primary health care to the most underserved and marginalized population in remote tribal/ hilly and /or insurgency areas.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/qSDU6YgM7pw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                            {/* <img src={process.env.PUBLIC_URL +"/assets/img/about.jpg"} className="img-fluid" /> */}
                        </div>
                        <div className="col-md-6 col-lg-6">
                            <div className="about">
                                <h2>Our Story</h2>
                                <p>
                                I-DO has been working with the tribal community for the last 4 years in 31 tribal habitations providing preventive, promotive & curative health services. 
                                </p>
                            </div>
                            <div className="about">
                                <h2>Mission</h2>
                                <p>
                                We work with marginalized communities – tribal, rural, women and children – bringing healthcare awareness, providing access to basic education and bringing in community empowering models to address those challenges. The model focuses to reduce deaths, diseases, malnutrition & illiteracy.
                                </p>
                            </div>
                        </div>
                        
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
                                <div className="mb-2"><img src='/assets/img/primary-health-care-ico.png'/></div>
                                <h4>Primary Health Care</h4>
                            </div>
                            </NavLink>

                            </div>
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                            <NavLink to={'/services/nutrition'}>

                             <div className="services-inner nutrition">
                                <div className="mb-2"><img src='/assets/img/nutrition-ico.png'/></div>
                                <h4>Nutrition</h4>
                            </div>
                            </NavLink>
                            </div>
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                            <NavLink to={'/services/education'}>

                             <div className="services-inner education">
                                <div className="mb-2"><img src='/assets/img/education-ico.png'/></div>
                                <h4>Education</h4>
                            </div>
                            </NavLink>
                            </div>
                            {/* <div className="col-md-4 col-lg-4 col-12 mt-3">
                            <NavLink to={'/services/wash'}>

                             <div className="services-inner wash">
                                <div className="mb-2"><img src='/assets/img/wash.png'/></div>
                                <h4>Wash</h4>
                            </div>
                            </NavLink>
                            </div> */}
                            
                            <div className="col-md-4 col-lg-4 col-12 mt-3">
                            <NavLink to={'/services/sustainable-health'}>

                             <div className="services-inner sustainable-health">
                                <div className="mb-2"><img src='/assets/img/sustainable-health-ico.png'/></div>
                                <h4>Sustainable Health</h4>
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
                         <Ticker className="service-count" end={31}  />
                            <div className="service-count-name">Habitations</div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={41}  />
<div className="service-count-name">Community health workers trained</div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={4300}  />
<div className="service-count-name">Population covered </div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={14}  />
<div className="service-count-name">
Bridge schools 
 </div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={432}  />
<div className="service-count-name">
Students </div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={432}  />
<div className="service-count-name">
Mid-day meals provided Daily
 </div>
                         </div>
                         <div className="col-12 col-md-4 d-flex flex-column service-count-wrapper">  
                         <Ticker className="service-count" end={1000}  />
<div className="service-count-name">
Nutrition powder provided Daily
 </div>
                         </div>

                    </div>
                </div>
            </section>
             <section className="section bg-white" id="team">
                <div className="container-fluid">
                    <div className="container">
                        <div className="section-header">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <h1>Meet with our happy Volunteers</h1>
                                </div>
                                <div className="col-lg-8">
                                    <div className="section-desc sub-title ps-5">
                                        We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-theme owl-carousel" id="teamSlider">
                            <div className="team-wrapper">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/team1.jpg"} />
                                        <div className="team-social">
                                            <ul className="global-list">
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <h2>Jenifar Tulip</h2>
                                    <span>Field Supervisor</span>
                                </div>
                            </div>
                            <div className="team-wrapper">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/team2.jpg"} />
                                        <div className="team-social">
                                            <ul className="global-list">
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <h2>Adam Rayan </h2>
                                    <span>Project Manager</span>
                                </div>
                            </div>
                            <div className="team-wrapper">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/team3.jpg"} />
                                        <div className="team-social">
                                            <ul className="global-list">
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <h2>Maria Ket</h2>
                                    <span>Communication Manager</span>
                                </div>
                            </div>
                            <div className="team-wrapper">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/team4.jpg"} />
                                        <div className="team-social">
                                            <ul className="global-list">
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <h2>Justine Baker</h2>
                                    <span>Program Co-Ordinator</span>
                                </div>
                            </div>
                            <div className="team-wrapper">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/team2.jpg"} />
                                        <div className="team-social">
                                            <ul className="global-list">
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabIndex="-1"><i className="fa fa-facebook"></i></a></li>
                                            </ul>
                                            </div>
                                    </div>
                                    <h2>Maria Ket</h2>
                                    <span>Communication Manager</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      {/* <section className="section bg-white" id="causes">
                <div className="container">
                    <div className="section-header col-lg-7">
                        <h1>
                            Featured Causes
                        </h1>
                        <p className="sub-title title-before">
                            We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes1.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">Cash for Charity</a>
                                </h2>
                                <span>For Pure Water</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes2.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">For Homeless</a>
                                </h2>
                                <span>For Safety Life</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes3.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">Medical Facilities</a>
                                </h2>
                                <span>Treatment</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes4.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">Hope For Happiness</a>
                                </h2>
                                <span>Donate For Food</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes5.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">Help For Children</a>
                                </h2>
                                <span>For Pure Water</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="causes">
                                <div className="causes-img">
                                    <img src={process.env.PUBLIC_URL +"/assets/img/causes6.jpg"} className="img-fluid" />
                                    <div className="overlay">
                                        <div className="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div className="donation">
                                            <ul className="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" className="btn btn-primary">Donate Now</a>
                                    </div>
                                </div>
                                <h2>
                                    <a href="cause-details.html">Help For A Poet</a>
                                </h2>
                                <span>Donte For Life</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
           
        </React.Fragment>
    ) 
}

export default Home;