import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import PropertyFinding from './Pages/PropertyFinding'
import MobileApp from './Pages/MobileApp'
import Payment from './Pages/Payment'
import SupportCustomer from './Pages/SupportCustomer'
import AuthPage from './Pages/AuthPage'
import Aboutus from './Pages/Aboutus'
import Flight from './Pages/Flight'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ListingProperties' element={<PropertyFinding />} />
        <Route path='/App' element={<MobileApp />} />
        <Route path='/PaymentMethod' element={<Payment />} />
        <Route path='/CustomerSupport' element={<SupportCustomer />} />
        <Route path='/SignPage' element={<AuthPage />} />
        <Route path='/AboutUs' element={<Aboutus />} />
        <Route path='/Flights' element={<Flight />} />



      </Routes>
    </BrowserRouter>
  )
}

export default App;
