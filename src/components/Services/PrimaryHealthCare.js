import React, { useState } from 'react';
import Footer from "../Footer";
function PrimaryHealthCare() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Our Work</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Primary Health Care</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Primary Health Care
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <h2 className="sub-heading mb-3">Mobile medical unit (MMU)</h2>
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/mobile-unit.jpeg" className="img-fluid" />
                            </div>

                            <div className="col-lg-6">
                                <div className="mb-3">
                                </div>


                                <div>
                                    <h4 className="">Intervention</h4>
                                    <ul className="arrow">
                                        <li>To increase the health awareness & to provide quality healthcare services free of cost to the last mile, Initiative of mobile medical unit taken up in January 2021.
                                        MMU covers tribal population of 2300 members in 18 villages. Mobile medical unit visits habitations on scheduled basis and provides diagnostics & curative services for the communicable and non-communicable diseases.
                                        Through regular visits to the habitations, there has been gradual development of trust & bond between the community members and our team which is crucial for sustainability.
</li>

                                    </ul>
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

export default PrimaryHealthCare;