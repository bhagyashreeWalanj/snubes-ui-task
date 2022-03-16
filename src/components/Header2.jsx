import React, { useState } from 'react'
import snubesLogo from '../images/snubes-logo.png'
import { Link } from "react-scroll";


function Header2() {
    const [toggleMenu, setToggleMenu] = useState(false);

    const handleToggle = () => {
        setToggleMenu(!toggleMenu)
    }

    return (
        <>
            <header className="sticky top-0 z-50 m-auto ">
                <div className="px-4 py-2 text-white sm:flex-none flex justify-between bg-gray-100 ">
                    <img src={snubesLogo} onClick={() => window.location.reload()} className="lg:w-[160px] sm:w-px[30] w-40 h-5 sm:ml-1 lg:ml-20" alt="snubes logo" />
                    <div className={toggleMenu ? "md:flex  md:pt-0 pt-10 w-full md:w-auto" : "hidden md:flex md:m-0.5"} id="menu">
                        <ul>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                                <Link
                                    activeClass="active"
                                    to="aboutUs"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={600}
                                > About Us</Link>
                            </li>
                            <li className="dropdown md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3 relative"><Link
                                activeClass="active"
                                to="servicesOffers"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >How it works</Link></li>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link
                                activeClass="active"
                                to="testimonials"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            > Become a partner</Link></li>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                                <select className="bg-gray-100">
                                    <option className="active text-gray-500 cursor-pointer" value="USD">USD</option>
                                    <option value="EUR" className="text-gray-500 cursor-pointer">EUR</option>
                                    <option value="RS" className="text-gray-500 cursor-pointer">RS</option>
                                </select>
                            </li>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3">
                                <select className="bg-gray-100">
                                    <option className="active text-gray-500 cursor-pointer" value="EU">EU</option>
                                    <option value="DE" className="text-gray-500 cursor-pointer">DE</option>
                                    <option value="IN" className="text-gray-500 cursor-pointer">IN</option>
                                </select>
                            </li>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"><Link
                                activeClass="active"
                                to="contactForm"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={600}
                            >Sign In</Link></li>
                            <li className="md:inline-block text-gray-500 cursor-pointer hover:text-gray-500 border-b md:border-none py-2 px-3"> Get Access</li>
                        </ul>
                    </div>
                    <div className="cursor-pointer md:hidden">
                        <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
                        <label className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none" for="menu-btn">
                            <span onClick={handleToggle} className="navicon bg-white-darkest flex items-center relative"></span>
                        </label>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header2;

