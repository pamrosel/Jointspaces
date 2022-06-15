import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify'
import NoAccess from './pages/404'

const userAuth = () => {
  
  if(!localStorage.getItem('user')) return alert('Access Denied!');

  if(localStorage.getItem('user')){
    const userobject = JSON.parse(localStorage.getItem('user'))
    const userrole = userobject.role
    localStorage.setItem('usertype', userrole)
  }

  const usertype = localStorage.getItem('usertype')
  const user = usertype === 'user'
  console.log(user)
  // if user is true return TRUE
  return user

}

export default function ProtectedRoutes() {
  const isUser = userAuth();
  return isUser ? <Outlet/> : <NoAccess />
}

