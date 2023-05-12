import React, { useState } from 'react';
function MotherChildHealthCare() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    return (
        <React.Fragment>
            <div className="row align-items-center">

                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h4>INTERVENTIONS</h4>
                    <p class="sub-title title-before">IDO health care centres are being setup to ensure emergency delivery care in
                        tribal hamlets</p>
                </div>

                <div className="col-lg-6">
                    <img src="../../assets/img/healthcaredecentralisedhealthcare/Labour room.png" className="img-thumbnail rounded" />
                </div>
            </div>
            <div className="row align-items-center mt-3">
                <div className="col-lg-6">
                    <img src="../../assets/img/healthcaredecentralisedhealthcare/4.jpg" className="img-thumbnail rounded" />
                </div>
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <h4>Community Health worker and Training</h4>
                    <p class="sub-title title-before">To fill the gap we thought of training one male & one female person from their own community in
                        each habitation to provide basic healthcare. They are called community health workers
                        (CHWs).
                    </p>
                    <ol>
                        <li>CHWs are trained for basic mother & child care</li>
                        <li>Antenatal care of pregnant women include hemoglobin test, pregnancy confirmation test,
                            urine for protein , HIV, HBsAg, VDRL, and GRBS are done at their home. Vitals are also
                            monitored. Iron-folic acid & calcium supplements are provided.</li>
                        <li>Postnatal care & HBNC (Home Based Newborn Care): CHW examines the newborn for
                            cry, temperature, conjunctivitis, respiratory rate, baby weight, umbilical cord care, any
                            signs of sepsis like vomiting, chest in-drawing, cough & diarrhoea.</li>
                    </ol>
                </div>


            </div>
            <div className="row align-items-center mt-3">
                <div className="col-4">
                    <img src="../../assets/img/healthcaredecentralisedhealthcare/CHW performing fetal Doppler.png" className="img-thumbnail rounded" />
                </div>
                <div className="col-4">
                    <img src="../../assets/img/healthcaredecentralisedhealthcare/CHW conduvting Delivery.png" className="img-thumbnail rounded" />
                </div>
                <div className="col-4">
                    <img src="../../assets/img/healthcaredecentralisedhealthcare/CHW measuring new born weight.png" className="img-thumbnail rounded" />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MotherChildHealthCare;