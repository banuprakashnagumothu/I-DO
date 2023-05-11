import React, { useState } from 'react';
import Footer from "./Footer";
function BecomeAVolunteer() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                   Become a Volunteer

                            </li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Become a Volunteer
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSewkxptCaXo9fWKMPsHiING4wNh8aUVxcsRIf3NHJtzb52_jQ/viewform?embedded=true" width="800" height="1630" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </React.Fragment>
    )
}

export default BecomeAVolunteer;