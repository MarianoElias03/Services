import React from 'react'
import Link from 'next/link';

const Footer = () => {
    return (
        <>
        <div className='container'>
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item ms-3">
              <Link className="nav-link px-2 text-muted" href="/">Home</Link>
            </li>
            <li className="nav-item ms-3">
              <a class="nav-link px-2 text-muted" href="#About Us">About</a>
            </li>
            <li className="nav-item ms-3">
              <a class="nav-link px-2 text-muted" href="#Why Us?">Why Us?</a>
            </li>
            <li className="nav-item ms-3">
              <a class="nav-link px-2 text-muted" href="#contact form">Contact</a>
            </li>
          </ul>
          <p className="text-center text-muted">2023 Punchclean</p>
        </div>
    </>
    )
}

export default Footer;
