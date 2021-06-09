import React ,{ useState }from 'react';
import Footer from "../Footer";
 function PrimaryHealthCare() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
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
                        <div className="row">
                        <h2 className="sub-heading mb-3">Mother & Child Health Care</h2>

                        <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/mother-health-care.jpeg" className="img-fluid" />
                            </div>
                           
                            <div className="col-lg-6">
                             <div className="mb-3">  
                    <div className="mb-2">            <h4 className="">Challenge</h4>
                                <ul className="arrow">
                                    <li>There is no ASHA or Community Health Workers in the locality. Poor health seeking behaviour, black magic and language barrier are the major issues.
</li>
     <li>
     As these tribal habitations are located remotely, hilly and insurgency areas majority of deliveries occur in the habitations only (The rate of institutional delivery is the lowest among tribal women) & there are no healthcare services for both mother & newborn. 
</li>   
<li> In the year 2019, in 31 habitations we have recorded 24 infant deaths out of 88 live births. (Under-1 year age).  IMR recorded was 27.2%. 
</li>   
<li>In the year 2019, IMR recorded of India was 3%. 
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
                            <div className="row">
                            <h2 className="sub-heading mb-3">Mobile medical unit (MMU)</h2>

                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/mother-health-care.jpeg" className="img-fluid" />
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
                <Footer/>
            </main>
    
          </React.Fragment>
    )
}

export default PrimaryHealthCare;