import React from "react";
import styles from '../styles/Home.module.css';
import chat from '../assets/IMG/icon-chat.png';
import money from '../assets/IMG/icon-money.png';
import security from '../assets/IMG/icon-security.png';
import { useDispatch } from "react-redux";
import { increment, decrement, add } from "../features/user.slice"
/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function Home () {
  const dispatch = useDispatch()
  const addNumber = () => {
    dispatch(increment())
  }

  const decrementNumber = () => {
    dispatch(decrement())
  }

  const changeNumber = (value) => {
    if(value == "") {
      return 
    }
    const number = parseInt(value)
    dispatch(add(number))
  }
  return(
    <main>
      <div>
        <button onClick={addNumber}>
          increment +
        </button>
        <button onClick={decrementNumber}>
          decrement -
        </button>
        <input type="number" onChange={(event) => changeNumber(event.target.value)} />
      </div>
      <div className={styles["hero"]}>
        <section className={styles["hero-content"]}>
          <h2 className={styles["sr-only"]}>Promoted Content</h2>
          <p className={styles["subtitle"]}>No fees.</p>
          <p className={styles["subtitle"]}>No minimum deposit.</p>
          <p className={styles["subtitle"]}>High interest rates.</p>
          <p className={styles["text"]}>Open a savings account with Argent Bank today!</p>
        </section>
      </div>
      <section className={styles["features"]}>
        <h2 className={styles["sr-only"]}>Features</h2>
        <div className={styles["feature-item"]}>
          <img src={chat} alt="Chat Icon" className={styles["feature-icon"]} />
          <h3 className={styles["feature-item-title"]}>You are our #1 priority</h3>
          <p>
            Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes.
          </p>
        </div>
        <div className={styles["feature-item"]}>
          <img
            src={money}
            alt="Chat Icon"
            className={styles["feature-icon"]}
          />
          <h3 className={styles["feature-item-title"]}>More savings means higher rates</h3>
          <p>
            The more you save with us, the higher your interest rate will be!
          </p>
        </div>
        <div className={styles["feature-item"]}>
          <img
            src={security}
            alt="Chat Icon"
            className={styles["feature-icon"]}
          />
          <h3 className={styles["feature-item-title"]}>Security you can trust</h3>
          <p>
            We use top of the line encryption to make sure your data and money
            is always safe.
          </p>
        </div>
      </section>
    </main>
  )
}