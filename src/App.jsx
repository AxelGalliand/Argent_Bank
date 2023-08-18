import './App.css'
import { Routeur } from './Component/Routes'
import { Header } from './Component/Header'
import { Footer } from './Component/Footer'

/**
 * function to create the main content
 * @returns {function} export this function to main.jsx
 */
function App() {
  return (
    <div className='App'>
      <Header/>
      <Routeur/>
      <Footer/>
    </div>
  )
}

export default App