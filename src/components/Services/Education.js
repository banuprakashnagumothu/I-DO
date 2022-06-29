import React ,{ useState }from 'react';
import Footer from "../Footer";
 function Education() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
        <section className="container-fluid page-section">
            <div className="container position-relative">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="#">Our Work</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Education</li>
                    </ol>
                </nav>
                <h1 className="page-name">
                  Education
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
                                        <li> In the interior habitations there are no anganwadi centres or schools which made education inaccessible to the tribal habitation children.    

                                        </li>
                                    </ul>
                                </div>
                                <div>  <h4 className="">Intervention</h4>
                                    <h6></h6>
                                    <ul className="arrow">
                                        <li>To fill this gap we have initiated BRIDGE SCHOOLS within the habitations itself, where they get access to basic education, mid-day meal & nutrition (Nutrition powder). After identifying potential students we motivate them to join into mainstream schools. 
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

export default Education;