import React from "react";
import styles from '../styles/Footer.module.css';

/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function Footer () {
    return(
        <footer className={styles["footer"]}>
        <p className={styles["footer-text"]}>Copyright 2020 Argent Bank</p>
      </footer>
    )
  }  