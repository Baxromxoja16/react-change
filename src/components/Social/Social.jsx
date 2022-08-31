import React from 'react'
import './Social.sass'
import Facebook from '../icons/Facebook'
import Instagram from '../icons/Instagram'
import Telegram from '../icons/Telegram'

const Social = () => {
    return (
        <div className="contact_info_icons">
            <Telegram />
            <Instagram />
            <Facebook />
        </div>
    )
}

export default Social