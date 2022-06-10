import React, { useEffect, useState } from "react";
import Spinner from '../components/Spinner'
import axios from "axios";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetch() {
              try {
                  const { data } = await axios.get("http://localhost:3000/api/allusers");
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
                <article key={user._id} className="bg-greeny rounded-lg mb-8 p-4">
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
