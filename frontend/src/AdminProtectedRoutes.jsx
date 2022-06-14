import { Outlet } from 'react-router-dom';
import Login from './pages/Login'

const adminAuth = () => {

  if(!localStorage.getItem('user')) return alert('Access Denied!');

  if(localStorage.getItem('user')){
    const userobject = JSON.parse(localStorage.getItem('user'))
    const userrole = userobject.role
    localStorage.setItem('usertype', userrole)
  }

  const usertype = localStorage.getItem('usertype')
  const admin = usertype === 'admin'
  console.log(admin)
  // if admin is true return TRUE
  return admin

}

export default function ProtectedRoutes() {
  const isUser = adminAuth();
  return isUser ? <Outlet/> : <Login />
}