import React ,{ useState }from 'react';

 function About() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
             <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        About Us
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/team1.jpg" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <h1>
                                        People often think of <span>Charity As an Action</span>. But We think of Charity as a <span>State Of The Heart</span>
                                    </h1>
                                    <p>
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </p>
                                    <p class="sub-title title-before">
                                        Giving to those in need what they could be gaining from their own initiative may well be the kindest way to destroy people.
                                    </p>
                                    <p>
                                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container-fluid promotions-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 promotion-box">
                                <h3 className="promotions-heading">
                                    Give <span>Donation</span>
                                </h3>
                                <p>
                                    Neque porro quisquam est qui sit amet, consectetur, adipisci velit.
                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 promotion-box">
                                <h3 className="promotions-heading">
                                    Become <span>Volunteer</span>
                                </h3>
                                <p>
                                    Neque porro quisquam est qui sit amet, consectetur, adipisci velit.
                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 promotion-box">
                                <h3 className="promotions-heading">
                                    Give <span>Scholarship</span>
                                </h3>
                                <p>
                                    Neque porro quisquam est qui sit amet, consectetur, adipisci velit.
                                </p>
                            </div>
                            <div className="col-12 col-sm-12 col-md-6 col-lg-3 promotion-box">
                                <h3 className="promotions-heading">
                                    Register <span>Events</span>
                                </h3>
                                <p>
                                    Neque porro quisquam est qui sit amet, consectetur, adipisci velit.
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
                                    We make a difference in the lives of people during a very traumatic time in their life. Meeting their medical transport needs eases their burden.
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3169830003!2d78.26795798723583!3d17.412299800563062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1622683949146!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
    
          </React.Fragment>
    )
}

export default About;