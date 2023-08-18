import React from "react";
import styles from '../styles/Header.module.css';
import logo from '../assets/IMG/argentBankLogo.png'
import { useSelector } from "react-redux";
import { stateUser } from "../features/user.slice";
/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function Header () {
  const { number } = useSelector(stateUser)
  console.log(number)
  return(
    <nav className={styles["main-nav"]}>
    <a className={styles["main-nav-logo"]} href="./index.html">
      <img
        className={styles["main-nav-logo-image"]}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={styles["sr-only"]}>Argent Bank</h1>
    </a>
    <div>
      <a className={styles["main-nav-item"]} href="./sign-in.html">
        <i className={styles["fa-duotone fa-circle-user"]}></i>
        Sign In

        number du state {number}
      </a>
    </div>
  </nav>
  )
}  