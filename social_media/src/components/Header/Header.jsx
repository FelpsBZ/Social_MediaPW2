import styles from "./Header.module.css";
import React from "react";
import searchIcon from "./SVGS/search-icon.svg";
import ButtonsInteract from "./ButtonsInteract/ButtonsInteract";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                    <div>K-SET</div>
                </div>

                <div className={styles.search}>
                    <input type="text" placeholder="Search users..." />
                    <img src={searchIcon} alt="Search" className={styles.searchIcon} />
                </div>
        </header>
    );
}

export default Header;
