import React ,{ useState }from 'react';
import Footer from "../Footer";
 function Wash() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
        <section className="container-fluid page-section">
            <div className="container position-relative">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Our Work</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Wash</li>
                    </ol>
                </nav>
                <h1 className="page-name">
                  Wash
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
                                        <li> As most of the habitations do not have electricity, wells/bore-wells, they fetch drinking water from nearby streams. The quality of water is very muddy, contaminated & unsafe for drinking. 
                                        </li>
                                        <li>
                                        We have observed that water borne diseases like frequent diarrhoea, Gastro-intestinal diseases, skin diseases; infectious diseases are caused by contaminated drinking water.
                                        </li>
                                    </ul>
                                </div>
                                <div>  <h4 className="">Intervention</h4>
                                    <h6></h6>
                                    <ul className="arrow">
                                        <li>I-DO has initiated WATSAN TERAFIL water filters as part of preventive healthcare. These are cost-effective, low maintenance water filters which remove the impurities, turbidity & maintain neutral PH of water. 
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

export default Wash;