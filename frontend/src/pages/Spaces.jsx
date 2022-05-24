import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import axios from "axios";

function Allspaces() {
  
  const [allspaces, setAllspaces] = useState([]);
  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    async function fetch() {
          try {
              const { data } = await axios.get("http://localhost:3000/api/allspaces");
              setAllspaces(data);
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
        <h1>Welcome <span className="text-greeny">{user && user.name}</span>, these are the spaces you are sharing.</h1>
      </section>

      <section>
        {allspaces.map((space, _id) => (
          <article key={space._id}>
            <img className='rounded-t-lg' src={space.spaceimage} alt={space.spacename}/>
            <div className='bg-white rounded-b-lg p-4 mb-6 text-plum'>
              <Link to={`/space/${space._id}`}>
                <h2>{space.spacename}</h2>
              </Link>
              <h3>{space.suburb}</h3>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default Allspaces
