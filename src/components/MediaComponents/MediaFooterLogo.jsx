import React from 'react'
import Media from 'react-media'
import logo from "../../../src/images/logo_icon.png";

const MediaFooterLogo = () => {
    return (
        <Media query="(max-width: 991px)">
            {matches => (
                matches ?
                    null
                    :
                    <div className="footer_logo">
                        <img src={logo} alt="png" />
                    </div>
            )}
        </Media>
    )
}

export default MediaFooterLogo