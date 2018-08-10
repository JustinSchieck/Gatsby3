import React from 'react'

import Footer from './Footer'
import portImg from '../assets/images/port.png'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={portImg} alt="" /></a>
                    <h1><strong>I am Justin Schieck</strong>, a Web Devleoper<br />
                    with a passion to learn and design.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
