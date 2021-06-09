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
                                Where Find Us
                            </h3>
                            <div className="col-lg-6 p-0">
                                <p class="sub-title title-before">
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <form action="#" class="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="formUsername">
                                                    Enter Name
                                                </label>
                                                <input class="form-control" id="formUsername" name="name" type="text" value="" size="30" aria-required="true" required="required" />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label for="formUseremail">
                                                    Enter email
                                                </label>
                                                <input class="form-control" id="formUseremail" name="email" type="text" value="" size="30" aria-required="true" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div class="form-group">
                                                <label for="formUsermessage">
                                                    Enter message
                                                </label>
                                                <textarea name="message" id="formUsermessage" class="form-control" required="required" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <input type="submit" class="btn btn-primary" value="Submit your message" />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-6">
                                <div className="google-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121747.08880799056!2d80.54482945333221!3d17.52676350609263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3410a556a5bd1d%3A0x9716a9866e772f09!2sKothagudem%2C%20Telangana!5e0!3m2!1sen!2sin!4v1622902483460!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                </React.Fragment>)
}
export default Footer;
