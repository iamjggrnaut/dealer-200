import React from 'react'
import {RxHamburgerMenu} from 'react-icons/rx'
import { Link, useNavigate } from 'react-router-dom'

const Navpanel = () => {

    const navigate = useNavigate()

    const location = document.location.href.split('/').at(-1)

    return (
        <div className='navpanel'>
            <div className="container navcontainer">
                <div className="col">
                    <span
                        className='logo'
                        onClick={e => navigate('/dealer-200')}
                    >
                        DEALER-200
                    </span>
                </div>
                <div className="menuitems col">
                    <span className={location === 'about' ? 'located' : ''}>
                        <Link to={'/about'}>
                            About&nbsp;Us
                        </Link>
                    </span>
                    <span className={location === 'dealer-200' ? 'located' : ''}>
                        <Link to={'/dealer-200'}>
                            Models
                        </Link>
                    </span>
                    <span className={location === 'testimonials' ? 'located' : ''}>
                        <Link to={'/testimonials'}>
                            Testimonials
                        </Link>
                    </span>
                    <span className={location === 'contact' ? 'located' : ''}>
                        <Link to={'/contact'}>
                            Contact
                        </Link>
                    </span>
                    <span>
                        <Link to={'/find-dealers'}>
                            <span className="primary-button">
                                Find a Dealer
                            </span>
                        </Link>
                    </span>
                </div>
                <RxHamburgerMenu id='hamburger'/>
            </div>
        </div>
    )
}

export default Navpanel