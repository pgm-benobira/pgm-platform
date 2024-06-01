import React, { useContext } from "react";
import "./Loading.css";
import GPLogo from "../../../assets/images/GP.svg";
import GPLogoLight from "../../../assets/images/GP-light.svg";
import { ThemeContext } from "../../../contexts/ThemeContext";

export default function Loading() {
    const { darkMode } = useContext(ThemeContext);
    return (
        <div className="loading-container">
            <div className="spinner"></div>
            <img src={darkMode ? GPLogoLight : GPLogo} alt="Logo" className="loading-logo" />
        </div>
    );
}
