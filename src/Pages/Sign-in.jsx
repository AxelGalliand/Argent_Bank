import React from "react";
import styles from '../styles/Sign-in.module.css';
import userIcon from "../assets/IMG/circleUser.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signIn, setToken } from "../features/user.slice";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function SignIn () {
 const inputUserId = useRef();
 const inputUserPass = useRef();
 const getAccessRef = useRef();
 const dispatch = useDispatch();
 const navigate = useNavigate()
 const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    email: inputUserId.current.value,
    password: inputUserPass.current.value,
  };

  axios.post("http://localhost:3001/api/v1/user/login",data).then((response) => {
    localStorage.setItem('token', response.data.body.token)
    dispatch(setToken(response.data.body.token));
    axios.post("http://localhost:3001/api/v1/user/profile", {}, {
      headers: {
        Authorization: `Bearer ${response.data.body.token}`
      }
    }).then((response) => {
      dispatch(signIn(response.data.body));
      navigate('/user')
    })
    .catch((error)=>{
      console.log(error);
    });
  })
  .catch((error)=>{
    console.log(error);
  });
};
  return(
    <main className={styles["main bg-dark"]}>
    <section className={styles["sign-in-content"]}>
    <img src={userIcon} alt="userIcon"/>
      <h1>Sign In</h1>
      <form className={styles["sign-inForm"]} onSubmit={(e) => handleSubmit(e)} ref={getAccessRef}>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" ref={inputUserId}/>
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={inputUserPass}/>
        </div>
        <div className={styles["input-remember"]}>
          <input type="checkbox" id="remember-me" />
          <label htmlFor="remember-me">Remember me</label>
        </div>
       <button className={styles["sign-in-button"]}>Sign In</button> 
      </form>
    </section>
  </main>
  )
}