
import React from 'react'
import Link from 'next/link';
import styles from "../styles/Header.module.css"
import Image from 'next/image';

const contactForm = () => {
    return (
        <>
            <form className='m-2' action="/mail.php" method='POST'>
            <div className="row g-3">
            <div className="col-sm mt-1 mb-1" id='Name'>
                <label className={styles.textlbl} htmlFor="name">Name</label>
                <input className="form-control" type="text" id="name" placeholder='Name'  name="name"></input>
            </div>
            <div className="col-sm mt-1 mb-1" id='email'>
                <label className={styles.textlbl} htmlFor="email">Email<a className="text-danger fw-bold">*</a></label>
                <input className="form-control" placeholder="example@example.com" type="email" id="mail" name="email" required></input>
            </div>
            </div>
            <div id='textarea' className="col-12 mt-1 mb-1">
            <label className={styles.textlbl} htmlFor="msg" >Message:</label>
            <textarea className="form-control" id="msg" name="message" placeholder="Message" rows={8} cols={50}></textarea>
            </div>
            <div className="col-sm-7 mt-3">
            <button type="submit" value="Send" className="btn btn-primary"> Submit </button>
            </div>
            </form>
        </>            
    )
}

export default contactForm;