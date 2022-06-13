import { useSelector, useDispatch } from 'react-redux'
import { deleteUser, reset } from '../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify'
import { FaTimesCircle } from 'react-icons/fa'

function Users() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetch() {
              try {
                  const { data } = await axios.get("/api/allusers");
                  setUsers(data);
                  console.log(data);
              } catch (err) {
                  console.error(err);
              }
          }
        fetch();
      }, []);

    const { user, isError, isSuccess } = useSelector(
      // react-redux gets state from global 'auth' state   
      (state) => state.auth)

    useEffect(() => {
      // ifSuccess 
      if(isSuccess){
          toast.success('Success! User deleted')
          navigate('/admin')
          dispatch(reset())
      }
      if(isError) {
          toast.error('Oops! Something went wrong')
      }

      }, [user, isError, isSuccess, dispatch, navigate]
    )
  
    return ( 
      <>
            <section className='mb-8'>
            <h1>Manage Users</h1>
            </section>

            <section>
              {users.map((user, _id) => (
                <article key={user._id} className="bg-greeny rounded-lg mb-8 px-4 pb-4 relative">
                  <button onClick={(e) => 
                    e.currentTarget.nextElementSibling.style.display = "flex"}>
                    <div className="absolute -top-2 right-2"><FaTimesCircle className="text-3xl"/></div>
                  </button>

                  <span id="hey" className="hidden w-full items-center text-red bg-white p-2 rounded-lg my-2">
                    <h4 className='mr-2'>Are you sure you want to delete this user?</h4>
                    <button className='bg-red text-white p-4 rounded-lg' 
                      onClick={() => 
                        dispatch(deleteUser(user._id)
                        )}>yes</button>

                    <button className='bg-greyish text-white p-4 rounded-lg ml-2' onClick={(e) => 
                    console.log(e.currentTarget.parentElement.style.display = "none")}>no</button>
                  </span>
                 
                  <h2 className='mb-2'>Username: {user.name}</h2>
                  <p>ID: {user._id}
                  <br/>Created at: {user.createdAt}
                  <br/>Username: {user.name}
                  <br/>Email: {user.email}
                  <br/>Role: {user.role}
                  </p>
                  
                </article>
              ))}
            </section>
      </>
    )
  }
  
  export default Users

  // onClick={() => 
  //   dispatch(deleteUser(user._id))}