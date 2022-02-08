import React from 'react';
import './header.css';
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitch from '../assets/header/theme-switch.png'

function Header() {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img src={punkLogo} className='logo' alt='logo'></img>
            </div>
            <div className='searchBar'>
                <div className='searchIcon'>
                    <img src={searchIcon} className="icon" alt='Search' ></img>
                </div>
                <input className='search' placeholder='Collection, Item or User ....'></input>
            </div>
            <div className='header-Items'>
                <p>Drops</p>
                <p>MarketPlace</p>
                <p>Create</p>
            </div>
            <div className='header-Actions'>
                <div className='theme-Switch'>
                    <img src={themeSwitch} alt='switch' ></img>
                </div>
                <button>GET IN</button>
            </div>
        </div>
    );
}

export default Header;
