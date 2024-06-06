import React, { useContext } from "react";
import GPLogo from "../../../assets/images/GP.svg";
import GPLogoLight from "../../../assets/images/GP-light.svg";
import { ThemeContext } from "../../../contexts/ThemeContext";
import styles from "./Loading.module.css";

export default function Loading() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={`${styles.loadingcontainer} ${darkMode ? styles.dark : ''}`}>
            <div className={styles.spinner}></div>
            <img src={darkMode ? GPLogoLight : GPLogo} alt="Logo" className={styles.loadinglogo} />
        </div>
    );
}
