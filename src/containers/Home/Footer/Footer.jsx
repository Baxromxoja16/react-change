import React from 'react'
import './Footer.sass'
import Tel from '../../../components/icons/Tel'
import logo from "../../../images/logo_icon.png";
import Social from '../../../components/Social/Social';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_main">
                    <div className="footer_logo">
                        <img src={logo} alt="png" />
                    </div>
                    <ul className='footer_item'>
                        <li><a href="#!">КУРСЫ</a></li>
                        <li><a href="#!">ОТКРЫТЫЕ УРОКИ</a></li>
                        <li><a href="#!">КОВОРКИНГ</a></li>
                        <li><a href="#!">КОНТАКТЫ</a></li>
                    </ul>
                    <a href="+998965613300" className='footer_number'><Tel /> +998 93 561 33 00</a>
                    <Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer