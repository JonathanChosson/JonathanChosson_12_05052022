import React from 'react'
import logo from '../Assets/logo.png'
import '../Styles/Components/Header.css'

/**
 * Display the Header component
 * @component
 * @returns {reactElement}
 */
const Header = () => {
    return (
        <div className="Header">
            <a href='./'><div className="Header__logo">
                <img src={logo} alt="SportSee" className="Header__logo__img" />
                <p className="Header__logo__p">SportSee</p>
            </div></a>
            <p className="Header__p">Accueil</p>
            <p className="Header__p">Profil</p>
            <p className="Header__p">Réglage</p>
            <p className="Header__p">Communauté</p>
        </div>
    )
}

export default Header
