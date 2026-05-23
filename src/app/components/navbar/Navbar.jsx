import React from "react";
import Link from 'next/link';
import Styles from "./Navbar.module.css";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "about",
        url: "/about",
    },
    {
        id: 5,
        title: "contact",
        url: "/contact",
    },
    {
        id: 6,
        title: "dashboard",
        url: "/dashboard",
    },
]
const Navbar = () => {
    return (
        <div className={Styles.container}>
            <Link href='/' className={Styles.logo}>lamamia</Link>
            <div className={Styles.links}>
                <DarkModeToggle />
                {links.map(link => (
                    <Link key={link.id} href={link.url} className={Styles.link}>{link.title}</Link>
                ))}
            </div>
        </div>
    );
};
export default Navbar;
