import { Outlet } from 'react-router-dom';
import { toast } from 'react-toastify'
import Login from './pages/Login'

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
  return isUser ? <Outlet/> : <Login />
}




  // const user = usertype === 'user'
  // if(!user) return;
  // const accessToken = localStorage.getItem('nextauth.message');
  // if(!accessToken) return alert('Access Denied!');
  // return accessToken

  // if(localStorage.getItem('user')){
  //   console.log('user exists')
  //   const userobject = JSON.parse(localStorage.getItem('user'))
  //   const userrole = userobject.role
  //   console.log(userrole)

  //   localStorage.setItem('usertype', userrole)
  //   const usertype = localStorage.getItem('usertype')
  //   const user = usertype === 'user'
  //   if(!user) return;
  // }
  

  // if(!localStorage.getItem('user')){
  //   console.log('user does not exist')
  // } 


  // const userType = localStorage.getItem('userType')
  // const user = userType === 'user'
  // if(!user) return;
  // const accessToken = localStorage.getItem('accessToken');
  // if(!accessToken) return alert('Access Denied!');
  // return accessToken
  // localStorage.setItem('usertype', 'unauthorized')
  
  // let userobject = JSON.parse(localStorage.getItem('user'))
  // let userrole = userobject.role
  // localStorage.setItem('usertype', userrole)

  // const usertype = localStorage.getItem('usertype')
  // const user = usertype === 'user'
  // console.log(user)
  // // if user is true return TRUE
  // return user