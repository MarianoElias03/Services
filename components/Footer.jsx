import React from 'react'

export default function Footer(){
    return(
        <>
        <div className='bg-dark navbar'>
            <a className='navbar-brand'>
                <img className=' align-items-center circle rounded-circle ms-3' src='/PunchClean (1).png' width="50px" height="50px" />
            </a>
            <ul className='nav align-items-center justify-content-centre pb-3'>
                <li className='nav-item'><a className='nav-link' href='#'>Home</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>About</a></li>
                <li className='nav-item'><a className='nav-link' href='#'>Contact Me</a></li>
            </ul>
        </div>
        </>
    )
}