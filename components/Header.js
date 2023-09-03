import React from 'react'
import Link from 'next/link';
import styles from "../styles/Header.module.css"
import Image from 'next/image';

const Header = () => {
    return (
        <>
        <nav className={styles.navbar}>
        <div class="site-header sticky-top navbar navbar-expand-md bg-white z-3">
            <div class="container-fluid ">
                <Link class="navbar-brand p-0 m-0" href="/" >
                    <Image src="/PunchClean 1.svg" width={350} height={100} alt="PunchClean Logo"/>
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav me-5 fs-5 fw-semibold">
                        <li className="nav-item my-2 ms-3">
                        <Link className={styles.navLinks} href="/">Home</Link>
                        </li>
                        <li className="nav-item my-2 ms-3">
                        <a className={styles.navLinks} href="#About Us">About</a>
                        </li>
                        <li className="nav-item my-2 ms-3">
                        <a className={styles.navLinks} href="#Why Us?">Why Us?</a>
                        </li>
                        <li className="nav-item my-2 ms-3">
                        <a className={styles.navLinks} href="#contact form">Contact</a>
                        </li>
                        <li className="nav-item button bg-danger ms-5">
                        <a className="nav-link fw-bold link-navy d-none d-lg-block " href="#contact form">Get a quote</a>
                        </li>
                    </ul>                    
                </div>
            </div>
        </div>
    </nav>
    </>
    )
}

export default Header;