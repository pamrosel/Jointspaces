import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// Import components
import Header from './components/Header'
// Import pages
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Loggedout from './pages/Loggedout'
import Register from './pages/Register'
import Createspace from './pages/Createspace'

import Spaces from './pages/Spaces'
import SpaceSingle from './pages/SpaceSingle'
import SpaceBookings from './pages/SpaceBookings'

import Home from './pages/Home'
import Post from './pages/Post'

function App() {

  return (
    <>
      <Router>
        <div className='container px-6'>
          <Header />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/login' element={<Login />} />
              <Route path='/loggedout' element={<Loggedout />} />
              <Route path='/register' element={<Register />} />
              <Route path='/createspace' element={<Createspace />} />

              <Route path='/home' element={<Home />} />
              <Route path="/post/:id" element={<Post />} />

              <Route path='/space' element={<Spaces />} />
              <Route path="/space/:spaceid" element={<SpaceSingle />} />
              <Route path="/bookings/:bookingfromspaceid" element={<SpaceBookings />} />
            </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
