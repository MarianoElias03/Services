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
                <a class="navbar-brand p-0 m-0" >
                    <Image src="/PunchClean 1.svg" width={350} height={100} alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav p-2 me-5 fs-5 fw-semibold">
                    <li className="nav-item ms-3">
                    <a class="nav-link link-danger" href="#">Home</a>
                    </li>
                    <li className="nav-item ms-3">
                    <a class="nav-link link-danger" href="#">About</a>
                    </li>
                    <li className="nav-item ms-3">
                    <a class="nav-link link-danger" href="#">Services</a>
                    </li>
                    <li className="nav-item ms-3">
                    <a class="nav-link link-danger" href="#">Contact</a>
                    </li>
                    <li className="nav-item button bg-danger ms-5">
                    <a className="nav-link fw-bold link-black d-none d-lg-block " href="#">Get a quote</a>
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