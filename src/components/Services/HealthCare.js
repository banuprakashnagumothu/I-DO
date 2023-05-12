import React, { useState } from 'react';
import Footer from "../Footer";
import MobileMedicalUnit from './MobileMedicalUnit';
import MotherChildHealthCare from './MotherChildHealthCare';
import RegalleVillageClinic from './RegallaVillageClinic';
function HealthCare() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    const [activatedTab, setActivatedTab] = useState('mobileMedicalUnit');
    const activeTab = (tabItem) => {
        setActivatedTab(tabItem);
    }
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Our Work</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Health Care</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Health Care
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className='container'>
                        <div className='col-12'>
                            <ul>
                                <li>
                                    TOTAL PATIENTS TREATED = 45000
                                </li>
                                <li>ANTENATAL CHECKUPS FOR PREGNANT = 1556</li>
                                <li>NEWBORN CARE = 1944</li>
                                <li>CRITICAL PATIENTS ADMISSIONS = 143</li>
                                <li>SURGICAL CASES REFERRALS & ADMITTED = 67</li>
                            </ul>
                        </div>
                        <div className='col-12 mt-3 mb-3'>
                            <span className='fw-bold'>Challenges in providing healthcare to Indigenous communities</span>
                            <ol>
                                <li>Accessibility: as the hamlets are located in isolated hilly terrains, the accessibility to
                                    healthcare services is very low</li>
                                <li>Literacy: due to poor literacy among indigenous sections, they lack health-seeking
                                    behaviour. For example, proportion of institutional deliveries are low among tribal women</li>
                                <li>Language: due to diverse languages they use compared to mainstream community, it is
                                    difficult to communicate with them and gain their TRUST</li>
                                <li>Also there are issues like resorting to unscientific methods for treating disease including
                                    black magic etc</li>
                            </ol>
                        </div>
                    </div>
                    <div className="container">
                        <ul class="nav nav-tabs healthcare-tabs mb-4" id="myTab" role="tablist">
                            <li class="nav-item" role="presentation" onClick={e => activeTab('mobileMedicalUnit')}>
                                <button className={(activatedTab === 'mobileMedicalUnit' ? 'active' : '') + " nav-link"} id="mobileMedicalUnit-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Interventions by I-DO</button>
                            </li>
                            <li class="nav-item" role="presentation" onClick={e => activeTab('motherChildHealthCare')}>
                                <button className={(activatedTab === 'motherChildHealthCare' ? 'active' : '') + " nav-link"} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Decentalised Healthcare units for Mother and Child care</button>
                            </li>
                            <li class="nav-item" role="presentation" onClick={e => activeTab('regallaVillageClinic')}>
                                <button className={(activatedTab === 'regallaVillageClinic' ? 'active' : '') + " nav-link"} id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Mobile medical unit</button>
                            </li>
                            <li class="nav-item" role="presentation" onClick={e => activeTab('mch')}>
                                <button className={(activatedTab === 'mch' ? 'active' : '') + " nav-link"} id="mch-tab" data-bs-toggle="tab" data-bs-target="#mch" type="button" role="tab" aria-controls="contact" aria-selected="false">MCH (Maternal and Child Healthcare) KITS</button>
                            </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                            <div className={(activatedTab === 'mobileMedicalUnit' ? 'show active' : '') + "tab-pane fade"} id="mobileMedicalUnit" role="tabpanel" aria-labelledby="home-tab">
                                <MobileMedicalUnit />
                            </div>
                            <div className={(activatedTab === 'motherChildHealthCare' ? 'show active' : '') + "tab-pane fade"} id="motherChildHealthCare" role="tabpanel" aria-labelledby="profile-tab">
                                <MotherChildHealthCare />
                            </div>
                            <div className={(activatedTab === 'regallaVillageClinic' ? 'show active' : '') + "tab-pane fade"} id="contact" role="tabpanel" aria-labelledby="contact-tab">
                                <RegalleVillageClinic />
                            </div>
                            <div className={(activatedTab === 'mch' ? 'show active' : '') + "tab-pane fade"} id="mch" role="tabpanel" aria-labelledby="mch-tab">
                                <div className='row'>
                                    <div className='col-12'>
                                        MCH kit is a toolkit comprising of 27items designed to
                                        <ol>
                                            <li>provide doorstep ante-natal check-up (ANC)</li>
                                            <li>conduct delivery and Home-based newborn care (HBNC).</li>
                                            <li>Deliver emergency care if baby suffers from asphyxia, sepsis and hypothermia</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    <div className='col-4'>
                                        <ul>
                                            <li>Foetal doppler</li>
                                            <li>Delivery kit</li>
                                            <li>BP Apparatus</li>
                                            <li>Glucometer</li>
                                            <li>Solar battery</li>
                                            <li>Warm Bag</li>
                                            <li>Thermometer</li>
                                            <li>Breath counter</li>
                                            <li>MUAC tape</li>
                                        </ul>
                                    </div>
                                    <div className='col-4'>
                                        <ul>
                                            <li>AMBU bag</li>
                                            <li>Suction bulb</li>
                                            <li>Stethoscope</li>
                                            <li>Urine strips</li>
                                            <li>Growth chart</li>
                                            <li>PPH Drape </li>
                                            <li>Haemoglobinometer</li>
                                            <li>Referral pad</li>
                                            <li>Flipchart</li>
                                        </ul>
                                    </div>
                                    <div className='col-4'>
                                        <ul>
                                            <li>Salter scale</li>
                                            <li>Weighing machine</li>
                                            <li>Head lamp</li>
                                            <li>Torch</li>
                                            <li>Measuring tape</li>
                                            <li>UPT</li>
                                            <li>Pulse-oximeter</li>
                                            <li>Register</li>
                                            <li>Malaria RDT</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="row align-items-center mt-2 mb-2">
                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                        <img src="../../assets/img/healthcaremchkit/1.jpg" className="img-thumbnail rounded nutri-img w-100" />
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="../../assets/img/healthcaremchkit/2.jpg" className="img-thumbnail rounded nutri-img w-100" />
                                    </div>
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

export default HealthCare;