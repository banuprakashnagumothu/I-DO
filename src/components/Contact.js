import React ,{ useState }from 'react';
import Footer from "./Footer";
 function Contact() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
             <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Contact
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-header">
                                    <div className='row'>
                                    <div>Phone number : <span className='fw-bold'>8096851841</span></div>
                                    <div>Email : <a className='fw-bold' href='mailto:indigenousdevelopment2019@gmail.com'>indigenousdevelopment2019@gmail.com</a></div>
                                    </div>
                                    <div className='row'>
<div className='col-12 mt-3'>
<div className='fw-bold'>Addressof Health center</div>
<div>IDO Health Clinic,</div>
<div>Gattumalla Village,</div>
<div>Laxmidevipally Mandal,</div>
<div>Bhadradri Kothagudem,</div>
<div>IDO Health Clinic,</div>
<div>Telanagna.</div>
<p>
<span className='fw-bold'>Facebook :</span> <a href='https://www.facebook.com/indigenousdevelopmentorg' target='_blank'>https://www.facebook.com/indigenousdevelopmentorg</a>
</p>

</div>
                                    </div>
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

export default Contact;