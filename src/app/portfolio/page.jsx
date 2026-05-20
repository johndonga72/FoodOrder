import React from 'react';
import styles from './page.module.css';
import Link from "next/link";
const portfolio = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.selectTitle}>My Portfolio</h1>
            <div className={styles.items}>
                <Link href="/portfolio/illustrations" className={styles.projectLink}>
                    <span className={styles.title}>Illustrations</span>
                </Link>
                <Link href="/portfolio/websites" className={styles.projectLink}>
                    <span className={styles.title}>Websites</span>
                </Link>
                <Link href="/portfolio/applications" className={styles.projectLink}>
                    <span className={styles.title}>Applications</span>
                </Link>
            </div>
        </div>
    )
}
export default portfolio