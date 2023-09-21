import React from "react";
import styles from '../styles/Header.module.css';
import logo from '../assets/IMG/argentBankLogo.png'
import { useSelector } from "react-redux";
import { stateUser } from "../features/user.slice";
import userIcon from "../assets/IMG/circleUser.svg"
import signOutIcon from "../assets/IMG/signOutIcon.svg"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signOut } from "../features/user.slice";
/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function Header () {
  const { isLogged } = useSelector(stateUser)
  console.log(isLogged)
  const { firstName } = useSelector(stateUser)
  console.log(firstName)
  const { lastName } = useSelector(stateUser)
  console.log(lastName)
  const dispatch = useDispatch();


  
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
     isLogged ? <div className={styles["Sign"]}>
      <Link className={styles["main-nav-item"]} to="/user"><div className={styles["SignInLink"]}>
        <img src={userIcon} alt="userIcon"/>
        <p className={styles["signInLink"]}> {firstName} {lastName} 
        </p> </div>
      </Link>
      <Link onClick={()=> dispatch(signOut())} className={styles["signOut"]} ><div className={styles["SignOutLink"]}>
          <img src={signOutIcon} alt="signOutIcon"/>
          <p className={styles["signOutLink"]}>Sign Out
          </p> </div>
        </Link></div>
    : 
      <div>
        <Link className={styles["main-nav-item"]} to="/sign-in">
          <img src={userIcon} alt="userIcon"/>
          <p className={styles["signInLink"]}>Sign In
          </p> 
        </Link>
      </div>}
    </div>
  </nav>
  )
}  