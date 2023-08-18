import React from "react";
import styles from '../styles/User.module.css';

/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function User () {
    return(
<main className={styles["main bg-dark"]}>
      <div className={styles["header"]}>
        <h1>Welcome back<br />Tony Jarvis!</h1>
        <button className={styles["edit-button"]}>Edit Name</button>
      </div>
      <h2 className={styles["sr-only"]}>Accounts</h2>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Checking (x8349)</h3>
          <p className={styles["account-amount"]}>$2,082.79</p>
          <p className={styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Savings (x6712)</h3>
          <p className={styles["account-amount"]}>$10,928.42</p>
          <p className={styles["account-amount-description"]}>Available Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
      <section className={styles["account"]}>
        <div className={styles["account-content-wrapper"]}>
          <h3 className={styles["account-title"]}>Argent Bank Credit Card (x8349)</h3>
          <p className={styles["account-amount"]}>$184.30</p>
          <p className={styles["account-amount-description"]}>Current Balance</p>
        </div>
        <div className={styles["account-content-wrapper cta"]}>
          <button className={styles["transaction-button"]}>View transactions</button>
        </div>
      </section>
    </main>
    )
}    