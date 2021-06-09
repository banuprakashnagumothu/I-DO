import React ,{ useState }from 'react';

 function Donate() {
     const [menu,setMenu]=useState([{'menuItem':"sdsdsd"},{'menuItem':"2  item"}]);
    return(
        <React.Fragment>
             <section className="py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-12 col-md-5">
                        <h1 className="main-heading">
                            SUPPORT  COVID-19 RELIEF SERVICE
                        </h1>
                        <p>
                            As the COVID-19 crisis continues to loom over us, The Government of India has taken a strict combat measure by directing a lockdown of the entire nation. At this great hour of need, The Foundation, in close coordination with State Governments & District Administration, has stepped in to provide relief by providing food to thousands of people across the country.
                        </p>
                        <p>
                            By adhering to all safety and hygiene measures, has begun its relief service by providing meal or packed grocery kits to the marginalised and low-income segment of the society comprising of daily wage workers, migrant labourers, construction site workers, and needy people at old age homes and night shelters. Presently, the Foundation and its Association Foundations are providing food relief in, Rajasthan, Karnataka, Telangana, Gujarat, Maharashtra, NCR, Uttar Pradesh, Andhra Pradesh, Tamil Nadu, Chhattisgarh, Odisha, Assam, Madhya Pradesh, Uttarakhand ,Tripura ,West Bengal , Punjab , Jharkhand and Himachal Pradesh.
                        </p>
                    </div>
                    <div className="col-12 col-md-6 mx-auto mb-4">
                        <h1 className="section-heading">
                            I Would Like To Contribute For COVID-19 Relief Service * :
                        </h1>
                        <div className="row mb-4">
                            <div className="col-12 col-md-12 position-relative mb-5">
                                <div className="text-center">
                                    <h2 className="donation-heading">
                                        Choose an amount
                                    </h2>
                                    <div>
                                        <button className="btn-amount active">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            3000
                                        </button>
                                        <button className="btn-amount">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            5000
                                        </button>
                                        <button className="btn-amount">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            10000
                                        </button>
                                        <button className="btn-amount">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            15000
                                        </button>
                                        <button className="btn-amount">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            20000
                                        </button>
                                        <button className="btn-amount">
                                            <svg id="Capa_1"  height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m418.474 0h-324.949v64.559h114.593c42.083 0 77.976 26.986 91.3 64.559h-205.893v64.559h205.893c-13.324 37.573-49.217 64.559-91.3 64.559h-114.593v64.559l189.203 189.205 45.65-45.651-143.552-143.552h23.292c77.943 0 143.158-55.538 158.153-129.119h52.203v-64.559h-52.203c-4.858-23.84-14.99-45.783-29.116-64.559h81.319z"/></g></svg>
                                            30000
                                        </button>
                                    </div>
                                </div>
                                <span className="or-text">
                                    OR
                                </span>
                            </div>
                            <div className="col-12 col-md-12">
                                <div className="text-center">
                                    <h2 className="donation-heading">
                                        Enter your own
                                    </h2>
                                    <div className="enter-custom-amount">
                                        <div>
                                            <span>
                                                <img src="img/rupee.svg" width="14" />
                                            </span>
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="personalinfo-wrapper">
                            <h3 className="personalinfo-heading">
                                Personal Info
                            </h3>
                            <form className="row" role="donation-form">
                                <div className="col-12 col-md-6 mb-3">
                                    <label>First Name</label>
                                    <input type="text" id="formUserFirstName" />
                                    <span className="error error-firstname">Please enter first name</span>
                                </div>
                                <div className="col-12 col-md-6 mb-3">
                                    <label>Last Name</label>
                                    <input type="text" id="formUserLastName" />
                                    <span className="error error-lastname">Please enter last name</span>
                                </div>
                                <div className="col-12 col-md-12 mb-3">
                                    <label>PAN No</label>
                                    <input type="text" id="formUserPanNo" />
                                    <span className="error error-pan">Please enter PAN No</span>
                                    <span className="error error-panvalid">Please enter valid PAN No</span>
                                </div>
                                <div className="col-12 col-md-12 mb-3">
                                    <label>Email ID</label>
                                    <input type="text" id="formUserEmail" />
                                    <span className="error error-email">Please enter mail</span>
                                    <span className="error error-emailvalid">Please enter valid email</span>
                                </div>
                                <div className="col-12 col-md-12 mb-3">
                                    <label>Mobile Number</label>
                                    <input type="text" id="formUserMobile" />
                                    <span className="error error-mobile">Please enter mobile number</span>
                                    <span className="error error-mobilevalid">Please enter valid mobile number</span>
                                </div>
                                <div className="col-12 col-md-12 mb-3">
                                    <label>City</label>
                                    <input type="text" id="formUserCity" />
                                    <span className="error error-city">Please enter city</span>
                                </div>
                                <div className="col-12 col-md-12 mb-3">
                                    <label className="options-checkbox position-relative pointer color-333">
                                        <span className="d-inline-block">
                                            <input type="checkbox" name="category"/>
                                            <span className="custom-checkbox"></span>
                                        </span>
                                        <span>
                                            I agree to terms and policies
                                        </span>
                                    </label>
                                </div>
                                <div className="col-md-12">
                                    <button className="btn-submit" id="btnSubmit">
                                        Make your donation now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
          </React.Fragment>
    )
}

export default Donate;