import React, { useState } from 'react';
function MobileMedicalUnit() {
    return (
        <React.Fragment>
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src="../../assets/img/healthcare/1.jpg" className="img-thumbnail rounded nutri-img" height='100px' width='100%' />
                </div>
                <div className="col-lg-6">
                    <p>
                        I-DO Health Centre: A centralised health facility has been established,
                        with funding from noble donors, to cater to the needs of indigenous
                        population with focus on out-patient services. The centre is also
                        equipped with lab facilities to provide diagnostic services and it is also
                        acting as first point of referral for higher health services
                    </p>
                </div>

            </div>
            <div className="row align-items-center mt-4">
                <div className="col-lg-6 mb-4 mb-lg-0">
                    <img src="../../assets/img/healthcare/Outpatient.png" className="img-thumbnail rounded nutri-img" height='100px' width='100%' />
                </div>
                <div className="col-lg-6">
                    <img src="../../assets/img/healthcare/lab.jpg" className="img-thumbnail rounded nutri-img" height='100px' width='100%' />
                </div>
            </div>
        </React.Fragment>
    )
}

export default MobileMedicalUnit;