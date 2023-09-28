import './App.css'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/Sign-in";
import { User } from "./Pages/User";
import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { signIn, setToken } from './features/user.slice';

export function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.token) {
      axios.post("http://localhost:3001/api/v1/user/profile", {}, {
        headers: {
          Authorization: `Bearer ${localStorage.token}`
        }
      }).then((response) => {
        dispatch(signIn(response.data.body));
        dispatch(setToken(localStorage.token))
      })
      .catch((error)=>{
        console.log(error);
      });
    }
  })
    return (
        <BrowserRouter>
          <Header />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/sign-in" element={<SignIn/>}/>
                <Route path="/user" element={<User/>}/>
            </Routes>
          <Footer />
        </BrowserRouter>    
    )
}

export default App