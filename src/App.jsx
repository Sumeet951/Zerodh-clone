
import './App.css'
import HomePage from './Pages/landing_page/home/HomePage'
import { Routes, Route} from 'react-router-dom'
// import Signup from './Pages/landing_page/signup/Signup'
// import PricingPage from './Pages/landing_page/pricing/PricingPage'
// import AboutPage from './Pages/landing_page/about/AboutPage'
import Navbar from './component/Navbar'
import Footer from './component/Footer'

function App() {

  return (
    <>
    <Navbar />

   <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<h1>Signup</h1>}></Route>
    <Route path="/pricing" element={<h1>Pricing page</h1>}></Route>
    <Route path="/about" element={<h1>About page</h1>}></Route>
   </Routes>

    <Footer/>
    </>
  )
}

export default App
