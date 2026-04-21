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
import Train from './Pages/Train'
import Car from './Pages/Car'
import AttractionandTour from './Pages/AttractionandTour'
import TravelGuide from './Pages/TravelGuide'
import Package from './Pages/Package'
import Book from './Pages/Book'
import Favorite from './Pages/Favorite'
import Bookings from './Pages/Bookings'
import MyBooking from './Pages/MyBooking'

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
        <Route path='/Trains' element={<Train />} />
        <Route path='/Cars' element={<Car />} />
        <Route path='/AttractionsandTours' element={<AttractionandTour />} />
        <Route path='/TravelGuides' element={<TravelGuide />} />
        <Route path='/Packages' element={<Package />} />
        <Route path='/BookNow' element={<Book />} />
        <Route path='/Favorites' element={<Favorite />} />
        <Route path='/Booking' element={<Bookings/>} />
        <Route path='/MyBookings' element={<MyBooking/>} />



      </Routes>
    </BrowserRouter>
  )
}

export default App;
