import React from "react";
import styles from '../styles/EditPopUp.module.css';
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../features/user.slice";
import axios from "axios";

/**
 * function to creat the header of the website
 * @returns {XMLDocument}
 */
export function EditPopUp () {
 const inputUserFirstName = useRef();
 const inputUserLastName = useRef();
 const getAccessRef = useRef();
 const dispatch = useDispatch();

 const handleSubmit = (e) => {
  e.preventDefault();

  const data = {
    firstName: inputUserFirstName.current.value,
    lastName: inputUserLastName.current.value,
  };

  axios.put("http://localhost:3001/api/v1/user/profile",data, {
    headers: {
      Authorization: `Bearer ${localStorage.token}`
    }
  }).then((response) => {
    dispatch(signIn(response.data.body));

  })
  .catch((error)=>{
    console.log(error);
  });

};

  return(
    <main className={styles["main bg-dark"]}>
    <section className={styles["change-content"]}>
      <h1>Change your first name and last name</h1>
      
      <form className={styles["changeForm"]} onSubmit={(e) => handleSubmit(e)} ref={getAccessRef}>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="firstName">FirstName</label>
          <input type="text" id="firstName" ref={inputUserFirstName}/>
        </div>
        <div className={styles["input-wrapper"]}>
          <label htmlFor="lastName">LastName</label>
          <input type="text" id="lastName" ref={inputUserLastName}/>
        </div>
       <button className={styles["change-button"]}>Change</button> 
      </form>
    </section>
  </main>
  )
}

