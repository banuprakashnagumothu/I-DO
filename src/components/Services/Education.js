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
                    Education                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 mb-4 mb-lg-0">
                                <img src="../../assets/img/team1.jpg" className="img-fluid" />
                            </div>
                            <div className="col-lg-6">
                                <div className="section-header">
                                    <h1>
                                        People often think of <span>Charity As an Action</span>. But We think of Charity as a <span>State Of The Heart</span>
                                    </h1>
                                    <p>
                                        Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    </p>
                                    <p class="sub-title title-before">
                                        Giving to those in need what they could be gaining from their own initiative may well be the kindest way to destroy people.
                                    </p>
                                    <p>
                                        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
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

export default Education;