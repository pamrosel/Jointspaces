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
import AdminDashboard from './pages/AdminDashboard'
import ActivityLog from './pages/ActivityLog'
import Users from './pages/Users'
import CreateAdmin from './pages/CreateAdmin'
import CreateUser from './pages/CreateUser'
import Help from './pages/Help'
import HelpMakeBooking from './pages/HelpMakeBooking'

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
              <Route path='/admin' element={<AdminDashboard />} />
              <Route path='/activitylog' element={<ActivityLog />} />
              <Route path='/users' element={<Users />} />
              <Route path='/createadmin' element={<CreateAdmin />} />
              <Route path='/createuser' element={<CreateUser />} />
              <Route path='/space' element={<Spaces />} />
              <Route path="/space/:spaceid" element={<SpaceSingle />} />
              <Route path="/bookings/:bookingfromspaceid" element={<SpaceBookings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/help/makeabooking" element={<HelpMakeBooking />} />
            </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
