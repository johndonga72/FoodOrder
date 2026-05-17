import Rect from 'react';
import Styles from "./footer.module.css";
import Image from 'next/image';
const Footer = () => {
    return (
        <footer className={Styles.container}>
            <p>&copy; 2023 My App. All rights reserved.</p>
            <div className={Styles.social}>
                <Image src="/1.png" width={15} height={15} className={Styles.icon} alt='Lam Dev Facebook image' />
                <Image src="/2.png" width={15} height={15} className={Styles.icon} alt='Lam Dev' />
                <Image src="/3.png" width={15} height={15} className={Styles.icon} alt='Lam Dev' />
                <Image src="/4.png" width={15} height={15} className={Styles.icon} alt='Lam Dev' />
            </div>
        </footer>
    );
};
export default Footer;