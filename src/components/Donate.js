import React ,{ useState }from 'react';
import Footer from "./Footer";

 function Donate() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
             <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Donate</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                    Donate
                    </h1>
                </div>
            </section>
             <section className="py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 col-md-12">
                    <p><span className='fw-bold'>Google pay :</span> 8096851841</p>
                    <p>
                        <div className='fw-bold'>Account details</div>
                        <div>Indigenous Development Organisation</div>
                        <div><span className='fw-bold'>Canara Bank ACC No :</span> 1090201005973</div>
                        <div>HayathNagar Branch</div>
                        <div><span className='fw-bold'>IFSC code :</span> CNRB0001090</div>
                    </p>

                    </div>
                </div>
            </div>
        </section>
        <Footer/>
          </React.Fragment>
    )
}

export default Donate;