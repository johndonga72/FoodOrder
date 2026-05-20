import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '../components/button/Button';
const contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/contact.png" alt="" fill={true} className={styles.image} />
                <div className={styles.img}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1>Who Are you ?</h1>
                    <p>
                        We are a team of passionate professionals dedicated to creating exceptional digital experiences.
                        With a blend of creativity, technical expertise, and a commitment to excellence, we strive to bring your vision to life in the digital realm.

                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What Do We Do ?</h1>
                    <p>
                        We specialize in crafting award-winning digital experiences that captivate audiences and drive results. From innovative web design and development to immersive multimedia solutions, we leverage cutting-edge technologies and creative storytelling to deliver impactful digital solutions that exceed expectations.
                    </p>
                </div>
                <Button url="contact" text="Contact Us" />
            </div>
        </div>
    );
};
export default contact