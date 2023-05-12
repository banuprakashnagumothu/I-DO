import React ,{ useState }from 'react';

function Footer(){
    return(<React.Fragment>
<section className="container-fluid promotions-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 promotion-box">
                                <h3 className="promotions-heading">
                                    Give <span>Donation</span>
                                </h3>
                                <p>
                                Remember that the happiest people are not those getting more, but those giving more.                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 promotion-box">
                                <h3 className="promotions-heading">
                                    Become <span>Volunteer</span>
                                </h3>
                                <p>
                                Volunteering is at the very core of being a human                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 promotion-box">
                                <h3 className="promotions-heading">
                                    Support a <span>Cause</span>
                                </h3>
                                <p>
                                We make a living by what we get, but we make a life by what we give
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </section>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="mb-5">
                            <h3 className="mb-4">
                               Leave a Message
                            </h3>
                        </div>
                        <div className="row">
                            <div className="col-lg-7 col-12 mb-4 mb-lg-0">
                            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdWddwgyUO_YFzVwBTao7pQagC00Ozpx6xu7eVL52DBEbsKOw/viewform?embedded=true" width="800" height="800" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>
                            <div className="col-lg-5 col-12">
                                <div className="google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15208.485095363052!2d80.6352853!3d17.6444143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3405e42e3b7def%3A0xc73f93f5275de6a7!2sIDO%20Health%20Centre!5e0!3m2!1sen!2sin!4v1683893344728!5m2!1sen!2sin" width="600" height="650"   loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </React.Fragment>)
}
export default Footer;
