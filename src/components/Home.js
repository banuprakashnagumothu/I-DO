import React ,{ useState }from 'react';

 function Home() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    //  async function getData(){
    //      const data = await fetch('https://jsonplaceholder.typicode.com/posts');
    //      setMenu(await data.json());
    //      };
    //      getData();
    return(
        <React.Fragment>
            <section className="banner" id="banner">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-lg-7">
                                <div className="banner-text">
                                    <h1>
                                        Your contribution <span>can help achieve a solution</span>
                                    </h1>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since
                                    </p>
                                    <button className="btn banner_actionbtn">
                                        Become a volunteer
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="row features__row">
                            <div className="col-12 col-lg-4">
                                <div className="features">
                                    <div className="features-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/featured1.png"} className="img-fluid" />
                                    </div>
                                    <h2>Our World</h2>
                                    <h3>We are in 32 Countries</h3>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="features">
                                    <div className="features-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/featured2.png"} className="img-fluid" />
                                    </div>
                                    <h2>Our Promise</h2>
                                    <h3>59% Of all $ goes to Programs</h3>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="features">
                                    <div className="features-icon">
                                        <img src={process.env.PUBLIC_URL +"/assets/img/featured3.png" } className="img-fluid" />
                                    </div>
                                    <h2>Our Reach</h2>
                                    <h3>We are in 32 Countries</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="services">
                <div className="container-fluid">
                    <div className="container">
                        <div className="section-header">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <h1>Charityo NonProfit Organization</h1>
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
                        </div>
                    </div>
                </div>
            </section>
            <section className="section bg-white" id="causes">
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
                                        <div class="paragraph">
                                            <p>We make a difference in the lives of people during a very traumatic time in their life.</p>
                                        </div>
                                        <div class="donation">
                                            <ul class="global-list">
                                                <li>Raised: $6,300</li>
                                                <li>Total Goal : $75000</li>
                                            </ul>
                                        </div>
                                        <a href="#" class="btn btn-primary">Donate Now</a>
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
            </section>
            <section className="section bg-white" id="about">
                <div className="container">
                    <div className="section-header col-lg-7">
                        <h1>
                            Who We Are
                        </h1>
                        <p className="sub-title title-before">
                            We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden.
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-7">
                            <img src={process.env.PUBLIC_URL +"/assets/img/about.jpg"} className="img-fluid" />
                        </div>
                        <div className="col-md-6 col-lg-5">
                            <div class="about">
                                <h2>Our Story</h2>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since
                                </p>
                            </div>
                            <div class="about">
                                <h2>Mission</h2>
                                <p>
                                    Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ea commodo consequat.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div class="about">
                                        <h2>How We Support ?</h2>
                                        <p>
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div class="about">
                                        <h2>Why Choose to Support us?</h2>
                                        <p>
                                            Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section" id="team">
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
                                        <div class="team-social">
                                            <ul class="global-list">
                                            <li><a href="#" tabindex="-1"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-facebook"></i></a></li>
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
                                        <div class="team-social">
                                            <ul class="global-list">
                                            <li><a href="#" tabindex="-1"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-facebook"></i></a></li>
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
                                        <div class="team-social">
                                            <ul class="global-list">
                                            <li><a href="#" tabindex="-1"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-facebook"></i></a></li>
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
                                        <div class="team-social">
                                            <ul class="global-list">
                                            <li><a href="#" tabindex="-1"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-facebook"></i></a></li>
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
                                        <div class="team-social">
                                            <ul class="global-list">
                                            <li><a href="#" tabindex="-1"><i class="fa fa-pinterest-p"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-instagram"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-twitter"></i></a></li>
                                            <li><a href="#" tabindex="-1"><i class="fa fa-facebook"></i></a></li>
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
        </React.Fragment>
    )
}

export default Home;