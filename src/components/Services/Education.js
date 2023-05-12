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
                            <p>
                            <span className='fw-bold'>Issue:</span>
                            <ul className='arrow'>
                                <li>In the interior preschool education was inaccessible to the children in the tribal
habitation.</li>
                                <li>Sending children directly to mainstream schools also was challenging.</li>
                            </ul>

                            </p>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img src="../../assets/img/education/1.png" className="img-thumbnail rounded nutri-img w-100"  />
                        </div>
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                            <img src="../../assets/img/education/2.png" className="img-thumbnail rounded nutri-img w-100"  />
                        </div>
                    <div className="col-lg-6 mb-4 mb-lg-0">
                            <p>
                            <span className='fw-bold'>Intervention:</span>
                            <ul className='arrow'>
                                <li>To fill this gap we have initiated BRIDGE SCHOOLS within the habitations itself,
where they get basic education, mid-day meal & nutrition (Nutrition powder). After
identifying potential students we motivate them to join into mainstream schools.
</li>
                            </ul>
                            </p>
                        </div>
                      
                    </div>
                    <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                            <p>
                            <span className='fw-bold'>Impact:</span>
                            <ul className='arrow'>
                                <li>430+ children now have access to basic education & midday meals in 13 habitations.</li>
                                <li>200+ children joined to mainstream school.</li>
                            </ul>

                            </p>
                        </div>
                        <div className="col-lg-6 mb-4 mb-lg-0">
                            <img src="../../assets/img/education/3.png" className="img-thumbnail rounded nutri-img w-100"  />
                            <span className="fw-bold">BRIDGE SCHOOLS</span>
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