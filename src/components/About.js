import React, { useState } from "react";
import Footer from "./Footer";
function About() {
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
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About Us
              </li>
            </ol>
          </nav>
          <h1 className="page-name">About Us</h1>
        </div>
      </section>
      <main>
        <section className="container-fluid py-5 bg-white">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src="../../assets/img/about-us.jpeg"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-6">
                <div className="section-header">
                  <h1>
                    <span className="text-underline">
                      Our Motto : REACHING THE UNREACHABLE
                    </span>
                  </h1>

                  <p class="sub-title title-before">
                    <strong style={{ color: "#00aeef", fontSize: "24px" }}>
                      WHO WE ARE
                    </strong>
                    <br />
                    <ul
                      style={{
                        listStyleType: "square",
                      }}
                    >
                      <li>
                        I-DO is brainchild of Dr Narendar who always had the
                        passion to serve the needy & the neglected population.
                        We work with an objective of providing universal,
                        affordable & comprehensive primary health care to the
                        most underserved and marginalized population in remote
                        tribal/ hilly and /or insurgency areas.
                      </li>
                      <li>
                        I-DO has been working with the tribal community for the
                        last 4 years in 31 tribal habitations providing
                        preventive, promotive & curative health services.
                      </li>
                      <li>
                        Bridge schools established within the habitation which
                        earlier had no access to education.
                      </li>
                      <li>
                        To combat malnutrition & anaemia, we have formulated
                        NUTRTION POWDER which is provided to Under-5 age
                        children, pregnant women & Lactating mothers.
                      </li>
                    </ul>
                  </p>
                  <p class="sub-title title-before">
                    <strong style={{ color: "#00aeef", fontSize: "24px"}}>
                      BACKGROUND
                    </strong>
                    <br />
                    <p>
                      There are 134 tribal habitations in the Bhadradri
                      kothagudem district of Telangana.
                    </p>
                    <ul
                      style={{
                        listStyleType: "square",
                      }}
                    >
                      <li>
                        As these tribal habitations are located remotely, hilly
                        and insurgency areas primary health care and emergency
                        services are almost difficult to access
                      </li>
                      <li>
                        There are no ASHA or healthcare workers in the locality.
                        Poor health seeking behaviour, black magic, traditional
                        beliefs, lack of connectivity and language barrier are
                        the major issues.
                      </li>
                      <li>
                        As majority of deliveries occur in the habitations only
                        (The rate of institutional delivery is the lowest among
                        tribal women) & there are no healthcare services for
                        both mother & newborn.
                      </li>
                      <li>IMR & MMR are very high in the region.</li>
                      <li>
                        Further, Anaemia and Malnutrition are highly prevalent
                        in the district. Studies indicate several cases of
                        Severe Acute Malnutrition (SAM) and Moderate Acute
                        Malnutrition (MAM) among the Under-5 children. IMR & MMR
                        are very high in the region.
                      </li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </React.Fragment>
  );
}

export default About;
