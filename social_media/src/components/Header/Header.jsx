import styles from "./Header.module.css";
import React from "react";
import searchIcon from "./SVGS/search-icon.svg";
import ButtonsInteract from "./ButtonsInteract/ButtonsInteract";

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.arrumar}>
                <div className={styles.logo}>
                    <img src="" alt="" />
                </div>

                <div className={styles.search}>
                    <input type="text" placeholder="Search..." />
                    <img src={searchIcon} alt="Search" className={styles.searchIcon} />
                </div>
            </div>
            <div className={styles.buttonInteract}>
                <ButtonsInteract></ButtonsInteract>
            </div>
        </header>
    );
}

export default Header;
