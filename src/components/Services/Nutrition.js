import React ,{ useState }from 'react';
import Footer from "../Footer";
 function Nutrition() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
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
                            <img src="../../assets/img/nutrition.jpeg" className="img-fluid" />
                        </div>

                        <div className="col-lg-6">
                            <div className="mb-3">
                                <div className="mb-2">        
                                    <h4 className="">Challenge</h4>
                                    <ul className="arrow">
                                        <li>There is no anganwadi centre in interior tribal habitation.
                                        </li>
                                        <li>
                                        We have observed majority of adolescents, pregnant women & under-5 age children had malnutrition, anaemia due to lack of balanced diet & no food security card which also contributes for low birth weight newborn & pre-term deliveries.
                                        </li>
                                        <li> Tribal report 2018 says, 65% of tribal women in the 15-49 years age group suffer from anemia.
                                        </li>
                                        <li>The prevalence of underweight is almost one and a half times in tribal children than in the others
                                        </li>
                                        <li>
                                        Only about 25% pregnant and lactating women and 29-32% children had adequate intakes of both protein and calories.
                                        </li>
                                        <li>
                                        Hence there was a need to provide them a supply of adequate protein, fats, carbohydrates & iron. 
                                        </li>
                                    </ul>
                                </div>
                                <div>  <h4 className="">Intervention</h4>
                                    <h6></h6>
                                    <ul className="arrow">
                                        <li>To fill the gap we have trained one male & one female person from their own community in each habitation to provide basic healthcare.  They are called community health workers (CHWs).
                                        </li>
                                        <li>
                                            CHWs are trained for providing basic mother & child healthcare
                                        </li>
                                        <li> Now doorstep Antenatal care of pregnant women include hemoglobin test, pregnancy confirmation test, urine for protein , HIV, HBsAg, VDRL, and GRBS are done. Vitals are also monitored.  Much needed Iron-folic acid & calcium supplements are provided.
                                        </li>
                                        <li> Intrapartum care: Conducting safe deliveries.
                                        </li>
                                        <li>Postnatal care & HBNC (Home Based Newborn Care):  CHW examines the newborn for cry, temperature, conjunctivitis, respiratory rate, baby weight, and umbilical cord care. Also checks for any signs of sepsis like vomiting, chest in-drawing, cough & diarrhoea. </li>
                                        <li>CHW ensures warmth by providing warm-bags for the baby, assists in breast-feeding, and counsels about the nutrition & guides about the immunization schedule. Creates health & nutrition awareness within the habitations.
                                        </li>
                                        <li>These CHWs are effective means to improve awareness & also remove the language barrier/misbelief and are locally available.
                                        </li>
                                        <li>We have identified & trained 43 CHWs from 31 habitations.
                                        </li>
                                    </ul>
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

export default Nutrition;