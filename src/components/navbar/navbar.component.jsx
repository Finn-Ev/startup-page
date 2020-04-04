import React from 'react';
import "./navbar.styles.scss"


const MyNavbar = () => {
    return (

        <nav className="navbar">
            <div className="container">

                <a href="#top" className="navbar-brand">Photastic</a>

                <ul className="navbar-links">
                    <li className="navbar-link">
                        <a className="navbar-link" href="#services">Leistungen</a>
                    </li>
                    <li className="navbar-link">
                        <a className="navbar-link" href="#products">Produkte</a>
                    </li>
                    <li className="navbar-link">
                        <a className="navbar-link" href="#reviews">Rezensionen</a>
                    </li>
                    <li className="navbar-link">
                        <a className="navbar-link" href="#contact">Kontakt</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MyNavbar;