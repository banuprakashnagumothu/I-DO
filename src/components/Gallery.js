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
                            <li className="breadcrumb-item active" aria-current="page">                    Gallery   
    
</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                    Gallery    
                                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                                <h4>Partners</h4>
                                
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