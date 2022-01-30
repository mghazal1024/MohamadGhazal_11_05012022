import React from 'react';
import './header.scss';
import logo from '../../images/LOGO.svg'
import {Link} from 'react-router-dom'

class Header extends React.Component {
    render() {
        return (
            <header>
                <div className='logo-container'>
                    <img src={logo} alt="logo" />
                </div>
                <nav className='main-nav'>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to="/a-propos">A Propos</Link></li>
                </nav>
            </header>
        )
    }
}

export default Header