import React, { useEffect, useState} from "react";
import styles from '../styles/User.module.css';
import { useSelector } from "react-redux";
import { stateUser } from "../features/user.slice";
import { useNavigate } from "react-router-dom";
import { EditPopUp } from "../Component/EditPopUp";
/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function User () {

  const [edit, setEdit] = useState(false);
  const { firstName } = useSelector(stateUser)
  console.log(firstName)
  const { lastName } = useSelector(stateUser)
  console.log(lastName)
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.token) {
      navigate("/")
    }
  })

    return(

<main className={styles["main bg-dark"]}>
      <div className={styles["header"]}>
        <h1>Welcome back<br />{firstName} {lastName}!</h1>
        <button className={styles["edit-button"]} onClick={() => setEdit(!edit)}>Edit Name</button>
        {edit ? (
          <div className={styles["popUp"]}>
            
            <EditPopUp />
          </div>
        ) : (
          <div>
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
          </div>
        )}


      </div>

    </main>
    )
}    