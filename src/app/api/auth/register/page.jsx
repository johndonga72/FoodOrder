import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
const Register = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input type="text" placeholder='username' className={styles.input} />
                <input type="text" placeholder='email' className={styles.input} />
                <input type="text" placeholder='password' className={styles.input} />
                <button className={styles.button}>Register</button>
            </form>
            <Link href="/dashboard/login">Login with existing account</Link>
        </div>
    )
}
export default Register;
