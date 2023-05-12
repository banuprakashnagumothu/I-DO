import React, { useState } from 'react';
import Footer from "./Footer";
function About() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
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
                                <img src="../../assets/img/about-us.jpeg" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <h1>
                                        <span className='text-underline'>Our Motto : REACHING THE UNREACHABLE</span>
                                    </h1>

                                    <p class="sub-title title-before">
                                        I-DO is the brainchild of Dr Narendar who always had the passion to serve the needy & the
                                        neglected population.</p>
                                    <p>After starting a clinic in a small hut at Kranthi nagar tribal hamlet, he was astonished to know
                                        that basic amenities like nutrition, clean drinking water & education were also lacking. To
                                        provide all these there was a need for collective support rather than individual efforts.</p>
                                    <p>Thus a group was formed which consisted of like-minded doctors, people from different arenas
                                        of work who started supporting this noble cause.</p>
                                    <p>I-DO has been working with the tribal community for the last 5 years reaching nearly 90 tribal
                                        habitations. This accounts for around 20000 population. We are providing health & nutrition,
                                        education, safe drinking water services etc</p>
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

export default About;