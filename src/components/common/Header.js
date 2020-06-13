import React from "react";
import logo from '../../logo.jpg';
import "./Header.scss"

const Header = () => (
    <header className="app-header">
        <img src={ logo } alt="logo" className="app-header__image"/>
    </header>
)

export default Header