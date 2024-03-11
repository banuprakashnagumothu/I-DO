import React, { useState } from "react";
import Footer from "../Footer";
function OtherInitiatives() {
  const [menu, setMenu] = useState([
    { menuItem: "sdsdsd" },
    { menuItem: "2  item" },
  ]);
  return (
    <React.Fragment>
      <section className="container-fluid page-section">
        <div className="container position-relative">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="#">Our Work</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Other Initiatives
              </li>
            </ol>
          </nav>
          <h1 className="page-name">Other Initiatives</h1>
        </div>
      </section>
      <main>
        <section className="container-fluid py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="section-header">
                  <h1>Safe drinking Water</h1>
                  <p>
                    As most of the habitations do not have electricity,
                    wells/bore-wells, they fetch drinking water from nearby
                    streams. The quality of water is very poor, muddy,
                    contaminated & unsafe for drinking.
                  </p>
                  <p class="sub-title title-before">
                    We have observed that water borne diseases like frequent
                    diarrhoea, Gastro-intestinal diseases, skin diseases,
                    infectious diseases are caused by contaminated drinking
                    water.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="../../assets/img/otherinitiatives/2.png"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="row align-items-center mb-2">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="../../assets/img/otherinitiatives/3.png"
                  className="img-thumbnail rounded w-100"
                />
              </div>
              <div className="col-lg-6">
                <div className="section-header">
                  <h1>Intervention:</h1>
                  <p class="sub-title title-before">
                    <ul
                      style={{
                        listStyleType: "square",
                      }}
                    >
                      <li>Dug well were planned in habitations.</li>
                      <li>
                        {" "}
                        I-DO has initiated TERAFIL water filters as part of
                        preventive healthcare. These are cost-effective, low
                        maintenance water filters which remove the impurities,
                        turbidity & maintain neutral PH of water making the
                        water safe for drinking.
                      </li>
                      <li>
                        To improve hygiene awareness, importance of hand-wash
                        has been explained in all our bridge schools.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="../../assets/img/otherinitiatives/4.png"
                  className="img-thumbnail rounded nutri-img w-100"
                />
              </div>
              <div className="col-lg-6">
                <img
                  src="../../assets/img/otherinitiatives/5.png"
                  className="img-thumbnail rounded nutri-img w-100"
                />
              </div>
            </div>
            <div className="row align-items-center mb-3 mt-3">
              <div className="col-lg-12 mb-4 mb-lg-0">
                <h3>Mosquito nets Distribution</h3>
                <img
                  src="../../assets/img/otherinitiatives/1.jpg"
                  className="img-thumbnail rounded"
                />
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default OtherInitiatives;
