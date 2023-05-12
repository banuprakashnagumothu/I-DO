import React, { useState } from 'react';
import Footer from "../Footer";
function Nutrition() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Our Work</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Nutrition</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Nutrition
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/nutrition/1.jpg" className="img-thumbnail rounded nutri-img" height='100px' width='100%' />
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-3">
                                    <div className="mb-3">
                                        <h4 className="">Issue</h4>
                                        <div>
                                            The nutritional indicators of tribals are diresome ranging from anaemia to severe acute
                                            malnutrition & Anaemia in Children and Pregnant & Lactating women.
                                        </div>
                                    </div>
                                    <div>
                                        <h4>Interventions</h4>
                                        <p>
                                            <span className='fw-bold'>Nutrition Powder: </span>
                                            I-DO formulated nutrition powder which has 5 ingredients
                                            comprising of Groundnuts, Bengal gram, Wheat, Jowar & Jaggery powder. This nutrition
                                            powder is regularly provided to habitations. 2100 grams of nutrition powder packet for 1
                                            person per month is provided.
                                        </p>
                                        <p>
                                            <span className='fw-bold'>Spot feeding Programme: </span>
                                            This intervention is aimed at ensuring the utilisation of
                                            nutrition powder where beneficiaries consume nutrition powder on spot in presence of
                                            healthcare workers
                                        </p>
                                        <p>
                                            <span className='fw-bold'>Nutrition unit: </span>
                                            A nutrition powder production has been set-up at Regalla village &
                                            made it sustainable by training two community members for production.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='row align-items-center'>
                            <div className='col-6'>
                                <p>
                                    <div className='fw-bold'>Impact</div>
                                    70 grams of nutrition powder to be provided every day in 40+ interior habitations for
                                    over <span className='fw-bold'>1800+</span> beneficiaries. Pregnant-Lactating Women & Children.
                                    <span className='fw-bold'>Reduction of Anaemia 39.5%, Wasting 38% & Underweight 24%.</span>
                                </p>
                            </div>
                            <div className='col-6'>
                                <img src="../../assets/img/nutrition/2.jpg" width='100%' height='100px' className="img-thumbnail rounded nutri-img" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-6'>
                                <img src="../../assets/img/nutrition/3.jpg" width='100%' height='100px' className="img-thumbnail rounded" />
                            </div>

                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </React.Fragment>
    )
}

export default Nutrition;