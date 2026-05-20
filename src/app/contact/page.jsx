import React from 'react';
import styles from "./page.module.css";
import Button from '../components/button/Button';
import Image from 'next/image';

const Contact = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Let's keep in Touch</h1>
            <div className={styles.content}>
                <div className={styles.imgContainer}>
                    <Image src='/contact.png' alt='' fill={true} className={styles.image} />
                </div>
                <form className={styles.form}>
                    <input type='text' placeholder='Name' className={styles.input} />
                    <input type='text' placeholder='Email' className={styles.input} />
                    <textarea placeholder='Message' className={styles.textArea} cols="30" rows="10" />
                    <Button url="#" text="send" />
                </form>

            </div>

        </div>
    )
}
export default Contact;