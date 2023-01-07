import React, { useState } from 'react';

const Header = ({

}) =>{
    const [modalStatus , setModalStatus] = useState(false);

    return (
        <header id="header" className="fixed-top d-flex align-items-center  header-transparent header-scrolled">
            <div className="container d-flex align-items-center justify-content-between">
                <div className="logo">
                    <h1>
                        <a href="/">Q/A</a>
                    </h1>
                        {/* <a href="index.html"><img src ="" alt="" className="img-fluid" /></a> */}
                </div>

                <nav id="navbar" className={`navbar ${modalStatus ?"navbar-mobile" : ""}`}>
                    <ul>
                    <li><a className="nav-link scrollto active" href="/">Home</a></li>
                    <li><a className="nav-link scrollto" href="/profile">Profile</a></li>
                    {/* <li><a className="nav-link scrollto" href="#services">Services</a></li> */}
                    {/* <li><a className="nav-link scrollto " href="#portfolio">Portfolio</a></li> */}
                    <li><a className="nav-link scrollto" href="/signin">Sign in</a></li>
                    <li><a className="nav-link scrollto" href="/signup">Sign up</a></li>
                    {/* <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                        <ul>
                        <li><a href="#">Drop Down 1</a></li>
                        <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                            <ul>
                            <li><a href="#">Deep Drop Down 1</a></li>
                            <li><a href="#">Deep Drop Down 2</a></li>
                            <li><a href="#">Deep Drop Down 3</a></li>
                            <li><a href="#">Deep Drop Down 4</a></li>
                            <li><a href="#">Deep Drop Down 5</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Drop Down 2</a></li>
                        <li><a href="#">Drop Down 3</a></li>
                        <li><a href="#">Drop Down 4</a></li>
                        </ul>
                    </li> */}
                    {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={() => {setModalStatus(!modalStatus)}}></i>
                </nav>

            </div>
        </header>
    )
}

export {Header};
