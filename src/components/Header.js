import { NavLink, Link } from "react-router-dom";
import React, { useState } from "react";
function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const activateMenu = () => {
        setActiveMenu(!activeMenu);
    }
    return (
        <React.Fragment>
            {/* <div className="d-md-none d-inline-flex justify-content-end w-100 "><NavLink to={process.env.PUBLIC_URL+'/donate'} activeClassName="active">   <button className="btn header__btndonate">
        Donate Now
    </button>
    </NavLink>
    </div> */}
            <header>
                <div className="container">
                    <nav>
                        <div className="nav-logo">
                            <a href="javascript:void(0);" className="logo">
                                I-DO
                            </a>
                            <span>
                                Indigenous Development Organization
                            </span>
                            <button className={(activeMenu ? 'nav-menu--open' : '') + " btn-navmenu"} id="nav-menu" onClick={activateMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <div className={(activeMenu ? 'd-block' : '') + " nav-listmenu"}>
                            <ul className="nav-list">
                                <li className="nav-item">
                                    <NavLink to={'/'} className="nav-link" exact>
                                        Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <a className="dropdown nav-link">
                                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            About Us
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink className="dropdown-item" to={'/about'}>About Us</NavLink></li>
                                            <li><NavLink className="dropdown-item" to={'/reports'}>Reports</NavLink></li>
                                        </ul>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="dropdown nav-link">
                                        <a className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Our Work
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                            <li><NavLink className="dropdown-item" to={'/services/health-care'}>Health Care</NavLink></li>

                                            <li><NavLink className="dropdown-item" to={'/services/nutrition'}>Nutrition</NavLink></li>
                                            <li><NavLink className="dropdown-item" to={'/services/education'}>Education</NavLink></li>
                                            <li><NavLink className="dropdown-item" to={'/services/other-initiatives'}>Other Initiatives</NavLink></li>


                                        </ul>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <NavLink to={'/contact'} className="nav-link" exact>
                                        Contact
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" exact to={'/our-partners'}>Our partners</NavLink>
                                </li>
                                <li className="d-none d-md-inline-flex">
                                    <NavLink to={process.env.PUBLIC_URL + '/donate'} activeClassName="active">   <button className="btn header__btndonate">
                                        Donate Now
                                    </button>
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" activeClassName="active" exact to={'/our-team'}>Our team</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;