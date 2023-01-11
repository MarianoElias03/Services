import React from "react";
import styles from "../styles/Contact.module.css"
import sendEmail from "../pages/api/sendEmail.js"
export default function contactForm(){
    return(
        <>
            <form className={styles.submitformcont}  method="post" onSubmit={sendEmail} id='emailform'>
                  <label className={styles.fullnamelbl} htmlFor="name">Name:</label>
                  <br/>
                  <input className={styles.fullnamebtn} type="text" id="name" placeholder='Name'  name="name" />

                  <br/>
                  <br/>

                  <label className={styles.emaillbl} htmlFor="mail">E-mail: <a className="text-danger fw-bold">*</a></label>
                  <br/>
                  <input className={styles.emailbtn}type="email" id="mail" name="email" placeholder="Enter your Email" required/>

                  <br/>
                  <br/>
                  <label className={styles.textlbl}htmlFor="msg">Message:</label>
                  <br/>
                  <textarea className={styles.textbtn} id="msg" name="message"  placeholder="Message"></textarea>

                  <br/>

                  <button className={styles.submitbtn}> Submit </button>
            </form>
        </>
    )
}