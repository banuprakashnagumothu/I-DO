import React, { useState } from "react";
import Footer from "../Footer";
function Nutrition() {
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
                Nutrition
              </li>
            </ol>
          </nav>
          <h1 className="page-name">Nutrition</h1>
        </div>
      </section>
      <main>
        <section className="container-fluid py-5 bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="../../assets/img/nutrition/1.jpg"
                  className="img-thumbnail rounded nutri-img"
                  height="100px"
                  width="100%"
                />
              </div>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div>
                    <h4>Challenge</h4>
                    <ul style={{ listStyleType: "square", marginLeft: "30px" }}>
                      <li>
                        There is no anganwadi centre in interior tribal
                        habitation.
                      </li>
                      <li>
                        We have observed majority of adolescents, pregnant women
                        & under-5 age children had malnutrition, anaemia due to
                        lack of balanced diet & no food security card which also
                        contributes for low birth weight newborn & pre-term
                        deliveries.
                      </li>
                      <li>
                        Tribal report 2018 says, 65% of tribal women in the
                        15-49 years age group suffer from anemia.
                      </li>
                      <li>
                        The prevalence of underweight is almost one and a half
                        times in tribal children than in the others
                      </li>
                      <li>
                        Only about 25% pregnant and lactating women and 29-32%
                        children had adequate intakes of both protein and
                        calories.
                      </li>
                      <li>
                        Hence there was a need to provide them a supply of
                        adequate protein, fats, carbohydrates & iron.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="row align-items-center" style={{marginTop: "30px"}}>
              <div className="col-lg-6">
                <div className="mb-3">
                  <div>
                    <h4>Interventions</h4>
                    <p>
                      <span className="fw-bold">Nutrition Powder: </span>
                      <ul
                        style={{ listStyleType: "square", marginLeft: "30px" }}
                      >
                        <li>
                          {" "}
                          We have formulated & prepared nutrition powder mix
                          which consists of Bengal gram, wheat, Jowar,
                          groundnuts and jaggery powder.
                        </li>
                        <li>
                          We have setup a production unit at regalla village in
                          the kothagudem district & trained two tribal community
                          members to prepare this powder. They also earn
                          livelihood from this.{" "}
                        </li>
                        <li>
                          {" "}
                          Nutrition powder is provided to under-5 age children,
                          pregnant woman and lactating mothers in 31
                          habitations.
                        </li>
                        <li>
                          60 grams of nutrition powder will be given as
                          Ready-to-use food (RTUF) to the beneficiaries every
                          day by our community health worker.
                        </li>
                        <li>
                          To ensure that they consume it every day “spot
                          feeding” is being done by our CHW everyday within the
                          habitation itself.
                        </li>
                      </ul>
                    </p>
                    <p>
                      <span className="fw-bold">Spot feeding Programme: </span>
                      This intervention is aimed at ensuring the utilisation of
                      nutrition powder where beneficiaries consume nutrition
                      powder on spot in presence of healthcare workers
                    </p>
                    <p>
                      <span className="fw-bold">Nutrition unit: </span>A
                      nutrition powder production has been set-up at Regalla
                      village & made it sustainable by training two community
                      members for production.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  src="../../assets/img/nutrition/2.jpeg"
                  width="100%"
                  height="100px"
                  className="img-thumbnail rounded nutri-img"
                />
              </div>
            </div>
            <div className="row" style={{marginTop: "30px"}}>
              <div className="col-6">
                <img
                  src="../../assets/img/nutrition/3.jpg"
                  width="100%"
                  height="100px"
                  className="img-thumbnail rounded"
                />
              </div>
              <div className="col-6">
                <p>
                  <div className="fw-bold">Impact</div>
                  70 grams of nutrition powder to be provided every day in 40+
                  interior habitations for over{" "}
                  <span className="fw-bold">1800+</span> beneficiaries.
                  Pregnant-Lactating Women & Children.
                  <span className="fw-bold">
                    Reduction of Anaemia 39.5%, Wasting 38% & Underweight 24%.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default Nutrition;
