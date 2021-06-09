import React ,{ useState }from 'react';
import Footer from "./Footer";
 function  OurPartners () {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
             <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                    Our Partners    
    
</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                    Our Partners    
                                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/about-us.jpeg" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <h1>
                                    Our Motto is <span>Reaching the Unreachable</span>
                                    </h1>
                                    <p>
                                    I-DO is brainchild of Dr Narendar who always had the passion to serve the needy & the neglected population. 
                                    </p>
                                    <p class="sub-title title-before">
                                    We work with an objective of providing universal, affordable & comprehensive primary health care to the most underserved and marginalized population in remote tribal/ hilly and /or insurgency areas.                                    </p>
                                    <p>
                                    I-DO has been working with the tribal community for the last 4 years in 31 tribal habitations providing preventive, promotive & curative health services. 
<br/><br/>Bridge schools established within the habitation which earlier had no access to education.
<br/><br/>To combat malnutrition & anaemia, we have formulated NUTRTION POWDER which is provided to Under-5 age children, Pregnant women & Lactating mothers

                                    </p>
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

export default OurPartners;