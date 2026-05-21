import React from 'react';
import './darkModeToggle.module.css';
const DarkModeToggle = () => {
    return (
        <div className={StyleSheet.container}>
            <div className={Styles.icon}></div>
            <div className={Styles.icon}></div>
            <div className={Styles.ball} />
        </div>
    )
}
export default DarkModeToggle;