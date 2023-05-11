import React, { useState } from 'react';
import Footer from "./Footer";
function Reports() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                    Reports

                            </li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Reports
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h4>Partners</h4>
                                <ul className="text-bold">
                                    <li>Karuna Trust</li>
                                    <li>Rural Hope Foundation (USA)</li>
                                    <li>Netcracker Technology Solutions Pvt Ltd
                                    </li>
                                    <li>Association for India’s Development (AID-USA)
                                    </li>
                                    <li>Issar Pharmaceuticals Pvt Ltd</li>
                                    <li>ARPAN</li>
                                    <li>TNR Trust</li>
                                    <li>Robin Hood Army Hyderabad (RHA)
                                    </li>
                                    <li>Samaritans-For the Nation
                                    </li>
                                    <li>Niswartha Foundation</li>
                                    <li>Bring a Smile Foundation
                                    </li>
                                    <li>Save the Child Foundation
                                    </li>
                                    <li>TechieRide</li>
                                    <li>Qvantel Software Solution Ltd
                                    </li>
                                    <li>1968 Batch, Gandhi Medical College NRI Doctors
                                    </li>
                                    <li>
                                        IMA Women’s Wing –Nalgonda
                                    </li>
                                    <li>Street NGO
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </React.Fragment>
    )
}

export default Reports;