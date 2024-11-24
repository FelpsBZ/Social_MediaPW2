import React from "react";
import styles from "./ButtonsInteract.module.css";
import moonIcon from "../SVGS/darkmode-icon.svg";
import chatIcon from "../SVGS/chat-icon.svg";
import bellIcon from "../SVGS/bell-icon.svg";
import infoIcon from "../SVGS/info-icon.svg";

function ButtonsInteract() {
    return (
        <div className={styles.iconContainer}>
            <button className={styles.iconButton}>
                <img src={moonIcon} alt="Dark Mode" />
            </button>
            <button className={styles.iconButton}>
                <img src={chatIcon} alt="Chat" />
            </button>
            <button className={styles.iconButton}>
                <img src={bellIcon} alt="Notifications" />
            </button>
            <button className={styles.iconButton}>
                <img src={infoIcon} alt="Info" />
            </button>
        </div>
    );
}

export default ButtonsInteract;
