import React from 'react';
import './css/Header.css';
import background from './images/desktop/image-hero.jpg';
import hamburger from './images/icon-hamburger.svg';

export default function Header() {
    return (
        <header className="header" style={{ backgroundImage: `url(${background})` }}>
            <nav className="navbar">
                <a className="loopstudio" href="/">
                    <h1>
                        loopstudio
                    </h1>
                </a>
                <ul className="navbar-list">
                    <li><a href="" >About</a></li>
                    <li><a href="" >Careers</a></li>
                    <li><a href="" >Events</a></li>
                    <li><a href="" >Products</a></li>
                    <li><a href="" >Support</a></li>
                </ul>
                <img className="hamburger" src={hamburger} alt="" />
            </nav>
            <div className="header-line">
                <h1>Immersive experiences that deliver</h1>
            </div>
        </header>
    );
}