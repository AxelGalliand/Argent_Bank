import React from "react";
import styles from '../styles/Sign-in.module.css';


/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function SignIn () {
  return(
    <main className={styles["main bg-dark"]}>
    <section className={styles["sign-in-content"]}>
      <i className={styles["fa fa-user-circle sign-in-icon"]}></i>
      <h1>Sign In</h1>
      
      <form>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className={styles["input-remember"]}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
        <a href="./user.html" className={styles["sign-in-button"]}>Sign In</a>
        {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
        {/* <!-- <button className={styles["sign-in-button"]}>Sign In</button> -->
        <!--  --> */}
      </form>
    </section>
  </main>
  )
}

    