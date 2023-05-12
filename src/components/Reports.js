import React, { useState } from 'react';
import DocViewer from "react-doc-viewer";
import Footer from "./Footer";
function Reports() {
    const [menu, setMenu] = useState([{ 'menuItem': "sdsdsd" }, { 'menuItem': "2  item" }]);
    const docs = [
        { uri: process.env.PUBLIC_URL + '/assets/img/image-24.jpg', },
      ];
    return (
        <React.Fragment>
            <section className="container-fluid page-section">
                <div className="container position-relative">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">                    Reports

                            </li>
                        </ol>
                    </nav>
                    <h1 className="page-name">
                        Reports
                    </h1>
                </div>
            </section>
            <main>
                <section className="container-fluid py-5 bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center">
                              <ul>
                                <li><a href='/assets/img/files/IDO ANNUAL REPORT 2019-20.docx' target='_blank'>IDO ANNUAL REPORT 2019-20</a></li>
                                <li><a href='/assets/img/files/IDO ANNUAL REPORT 2020-21.docx' target='_blank'>IDO ANNUAL REPORT 2020-21</a></li>
                                <li><a href='/assets/img/files/IDO ANNUAL REPORT 21-22.docx' target='_blank'>IDO ANNUAL REPORT 2021-22</a></li>
                              </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </main>

        </React.Fragment>
    )
}

export default Reports;