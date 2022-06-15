import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import AdminProtectedRoutes from "./AdminProtectedRoutes";
import UserProtectedRoutes from "./UserProtectedRoutes";
import { Provider } from 'react-redux';
import { store } from './app/store';

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
import ManageUsers from './pages/ManageUsers'
import ManageAdmin from './pages/ManageAdmin'
import EditUser from './pages/EditUser'
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
              <Route path="/">    
                
                <Route element={<UserProtectedRoutes />}>
                  <Route path='/' element={<Dashboard/>} />
                  <Route path='/space' element={<Spaces />} />
                  <Route path="/space/:spaceid" element={<SpaceSingle />} />
                  <Route path="/bookings/:bookingfromspaceid" element={<SpaceBookings />} />
                  <Route path='/createspace' element={<Createspace />} />
                  <Route path="/help" element={<Help />} />
                  <Route path="/help/makeabooking" element={<HelpMakeBooking />} />
                </Route>

                <Route element={<AdminProtectedRoutes />}>
                  <Route path='/admin' element={<AdminDashboard />} />
                  <Route path='/activitylog' element={<ActivityLog />} />
                  <Route path='/manageusers' element={<ManageUsers />} />
                  <Route path='/manageusers/:userid' element={<EditUser />} />
                  <Route path='/manageadmin' element={<ManageAdmin />} />
                  <Route path='/createadmin' element={<CreateAdmin />} />
                  <Route path='/createuser' element={<CreateUser />} />
                </Route>
            
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/loggedout' element={<Loggedout />} />
              </Route>
            </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App;
