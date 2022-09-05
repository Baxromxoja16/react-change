import React from 'react'
import './Footer.sass'
import Tel from '../icons/Tel'
import Social from '../Social/Social';
import { Link } from "react-router-dom"
import MediaFooterLogo from '../MediaComponents/MediaFooterLogo';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer_main">
                    <MediaFooterLogo />
                    <ul className='footer_item'>
                        <li><Link to="/courses">КУРСЫ</Link></li>
                        <li><Link to="/openlesson">ОТКРЫТЫЕ УРОКИ</Link></li>
                        <li><Link to="/coworking">КОВОРКИНГ</Link></li>
                        <li><Link to="/contact">КОНТАКТЫ</Link></li>
                    </ul>
                    <a href="tel:+998965613300" className='footer_number'><Tel /> +998 93 561 33 00</a>
                    <Social />
                </div>
            </div>
        </footer>
    )
}

export default Footer