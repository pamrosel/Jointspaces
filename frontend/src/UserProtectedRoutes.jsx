import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify'
import NoAccess from './pages/404'

const userAuth = () => {
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
  // If usertype === user, return TRUE
  const usertype = localStorage.getItem('usertype')
  const user = usertype === 'user'
  // console.log(user)
  return user

  // On user logout, usertype is reset to 'Unauthorized'
}

// Unauthorized access to User Routes will be redirected to 404 Component
export default function ProtectedRoutes() {
  const isUser = userAuth();
  return isUser ? <Outlet/> : <NoAccess />
}

