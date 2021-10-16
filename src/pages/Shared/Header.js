import React from 'react';
import logo from '../../images/Logo.png'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg container text-info">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <img style={{ width: '110px' }} src={logo} alt="" />
                    <form className="d-flex w-25 ms-5 position-relative">
                        <i style={{ fontSize: '20px' }} className="fas fa-search position-absolute ms-2 mt-2"></i>
                        <input className="form-control me-2 text-center" type="search" placeholder=" Search your Destination..." aria-label="Search" />
                    </form>
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item ms-5 ">
                            <a className="nav-link active text-muted" aria-current="page" href="#">News</a>
                        </li>
                        <li className="nav-item ms-5">
                            <a className="nav-link active text-muted" aria-current="page" href="#">Destination</a>
                        </li>
                        <li className="nav-item ms-5">
                            <a className="nav-link active text-muted" aria-current="page" href="#">Blog</a>
                        </li>
                        <li className="nav-item ms-5">
                            <a className="nav-link active text-muted" aria-current="page" href="#">Contact</a>
                        </li>
                        <button className="ms-5 ps-5 pe-5 bg-warning rounded">Login</button>
                    </ul>

                </div>
            </div>
        </nav >
    );
};

export default Header;