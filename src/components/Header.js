function Header(){
    return(
        <header>
            <nav className="navbar navbar-expand-lg p-0">
                <div className="container">
                    <a className="navbar-brand text-white" href="#">
                        {/* <img src={process.env.PUBLIC_URL +"/assets/img/logo.png"}/> */}
                        <span className="logo-circle">
                            I-DO
                        </span>
                        <span className="d-none d-md-inline-block">
                            Indigenous development organisation
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#services">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#causes">Causes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#team">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#blog">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={process.env.PUBLIC_URL+'/donate'}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Page</a>
                            </li>
                            <li className="nav-item">
                             <a href={process.env.PUBLIC_URL+'/donate'}>   <button className="btn header__btndonate">
                                    Donate Now
                                </button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;