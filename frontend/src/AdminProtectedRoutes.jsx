import { Outlet } from 'react-router-dom';
import NoAccess from './pages/404'

const adminAuth = () => {
  localStorage.setItem('usertype','unauthorized')

  // If user auth (jwt token) is set in localStorage then the 
  // user is authenticated. If it exists, store the user role
  // in localStorage item 'usertype'
  if(localStorage.getItem('user')){
    const userobject = JSON.parse(localStorage.getItem('user'))
    const userrole = userobject.role
    localStorage.setItem('usertype', userrole)
  }

  // Get usertype (which by default is 'Unauthorized')
  // If usertype === admin, return TRUE
  const usertype = localStorage.getItem('usertype')
  const admin = usertype === 'admin'
  // console.log(admin)
  return admin
  // On user logout, usertype is reset to 'Unauthorized'
}

// Unauthorized access to Admin Routes will be redirected to 404 Component
export default function ProtectedRoutes() {
  const isUser = adminAuth();
  return isUser ? <Outlet/> : <NoAccess />
}