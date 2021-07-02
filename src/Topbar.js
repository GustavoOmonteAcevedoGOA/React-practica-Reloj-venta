import React from 'react';
import classes from './Topbar.module.css';

const Topbar = (props) => {
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
            <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/amazon_logo_icon_169612.png" alt="Amazon logo"></img>
            </nav>
        </header>
        );
}
export default Topbar;