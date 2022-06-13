import { useDispatch } from 'react-redux'
import { deleteUser } from '../features/auth/authSlice'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTimesCircle } from 'react-icons/fa'

function Users() {
    // declare dispatch from react-redux 
    const dispatch = useDispatch()

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
  
    return ( 
      <>
            <section className='mb-8'>
            <h1>Manage Users</h1>
            </section>

            <section>
              {users.map((user, _id) => (
                <article key={user._id} className="bg-greeny rounded-lg mb-8 p-4 relative">
                  <button onClick={() => dispatch(deleteUser(goal._id))}>
                    <div className="absolute -top-2 right-2"><FaTimesCircle className="text-3xl"/></div>
                  </button>
                 
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
