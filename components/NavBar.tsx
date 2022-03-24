import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
    {
        text: "Home",
        href: "/",
    },
    {
        text: "About",
        href: "/about",
    },
    {
        text: "Contact",
        href: "/contact",
    },
    {
        text: "Pricing",
        href: "/pricing",
    },
];

export const NavBar = () => {
    return (
        <nav className={styles.nav}>
            {/* <ActiveLink text="Home" href="/">Home</ActiveLink>
            <ActiveLink text="About" href="/about">About</ActiveLink>
            <ActiveLink text="Contact" href="/contact">Contact</ActiveLink> */}
            {menuItems.map((menuItem, index) => (
                <ActiveLink href={menuItem.href} key={index} text={menuItem.text} />
            ))}
        </nav>
    );
};
