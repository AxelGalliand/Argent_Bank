import React from "react";
import styles from '../styles/Header.module.css';
import logo from '../assets/IMG/argentBankLogo.png'
import { useSelector } from "react-redux";
import { stateUser } from "../features/user.slice";
import userIcon from "../assets/IMG/circleUser.svg"
import { Link } from "react-router-dom";
/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function Header () {
  const { number } = useSelector(stateUser)
  console.log(number)
  const { isLogged } = useSelector(stateUser)
  console.log(isLogged)


  
  return(
    <nav className={styles["main-nav"]}>
    <Link className={styles["main-nav-logo"]} to="/">
      <img
        className={styles["main-nav-logo-image"]}
        src={logo}
        alt="Argent Bank Logo"
      />
      <h1 className={styles["sr-only"]}>Argent Bank</h1>
    </Link>
    <div>{
        isLogged ? <div>
          <Link className={styles["main-nav-item"]} to="/user">
        <img src={userIcon} alt="userIcon"/>
        <p className={styles["signInLink"]}>teste du NOM {number}
        </p> 
      </Link></div>
    : 
      <Link className={styles["main-nav-item"]} to="/sign-in">
        <img src={userIcon} alt="userIcon"/>
        <p className={styles["signInLink"]}>Sign In number du state {number}
        </p> 
      </Link>}
    </div>
  </nav>
  )
}  