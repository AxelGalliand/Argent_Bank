import './App.css'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from "./Pages/Home";
import { SignIn } from "./Pages/Sign-in";
import { User } from "./Pages/User";

export function App() {
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