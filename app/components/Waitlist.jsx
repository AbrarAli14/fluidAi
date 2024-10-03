import React from 'react';
import styles from '../styles/Waitlist.module.css'; // Custom CSS for styling

const Waitlist = () => {
    return (
        <section className={styles.waitlistSection}>
            <div className={styles.formContainer}>
                <h1>Join the Fluid AI Waitlist Today!</h1>
                <form className={styles.form}>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <div className={styles.countrySelect}>
                        <img src="/uae-flag.png" alt="UAE" className={styles.flag} />
                        <select>
                            <option>United Arab Emirates</option>
                        </select>
                    </div>
                    <button type="submit">Join Waitlist</button>
                </form>
            </div>
            <div className={styles.imageContainer}>
                <div className={styles.overlay}>
                    <img src="/wa.png" alt="Phone Mockup" />
                </div>
            </div>
        </section>
    );
};

export default Waitlist;
