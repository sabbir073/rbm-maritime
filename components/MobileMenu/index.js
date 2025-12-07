import React, { useState } from 'react';
import Link from "next/link";
import Image from 'next/image';
import Logo from '/public/images/logo.png';

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/',
    },
    {
        id: 2,
        title: 'About',
        link: '/about',
    },
    {
        id: 3,
        title: 'Services',
        link: '/service',
    },
    {
        id: 4,
        title: 'Projects',
        link: '/project',
    },
    {
        id: 5,
        title: 'Seafarer Jobs',
        link: '/seafarer-jobs',
    },
    {
        id: 6,
        title: 'Contact',
        link: '/contact',
    }
]


const MobileMenu = () => {

    const [menuActive, setMenuState] = useState(false);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
        setMenuState(false);
    }

    return (
        <div>
            {/* Overlay */}
            <div
                className={`mobile-menu-overlay ${menuActive ? "active" : ""}`}
                onClick={() => setMenuState(false)}
            />

            {/* Mobile Menu */}
            <div className={`mobileMenu ${menuActive ? "show" : ""}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-logo">
                        <Link href="/" onClick={ClickHandler}>
                            <Image src={Logo} alt="RBM Maritime" width={120} height={40} />
                        </Link>
                    </div>
                    <div className="close-btn" onClick={() => setMenuState(!menuActive)}>
                        <i className="ti-close"></i>
                    </div>
                </div>

                <nav className="mobile-nav">
                    <ul>
                        {menus.map((item, index) => (
                            <li key={index}>
                                <Link href={item.link} onClick={ClickHandler}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="mobile-menu-footer">
                    <div className="contact-info">
                        <p><i className="ti-mobile"></i> +8801813087877</p>
                        <p><i className="ti-email"></i> info@rbmbd.com</p>
                    </div>
                    <div className="social-links">
                        <Link href="https://www.facebook.com/rbmmaritime" target="_blank">
                            <i className="ti-facebook"></i>
                        </Link>
                        <Link href="https://wa.me/8801813087877" target="_blank">
                            <i className="fa fa-whatsapp"></i>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Hamburger Button */}
            <div className="showmenu" onClick={() => setMenuState(!menuActive)}>
                <button type="button" className="navbar-toggler open-btn">
                    <span className="icon-bar first-angle"></span>
                    <span className="icon-bar middle-angle"></span>
                    <span className="icon-bar last-angle"></span>
                </button>
            </div>
        </div>
    )
}

export default MobileMenu;
