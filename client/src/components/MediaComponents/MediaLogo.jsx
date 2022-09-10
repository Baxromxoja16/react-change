import React from 'react'
import Media from 'react-media';
import logo from "../../images/logo_icon.png";

const MediaLogo = () => {
    return (
        <Media query="(max-width: 991px)">
            {matches => (
                matches ?
                    <a href='/' className="logo">
                        <img src={logo} alt="" />
                    </a>
                    : null
            )}
        </Media>
    )
}

export default MediaLogo