// @src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {
  
    const [posts, setPosts] = useState([]);
    
  useEffect(() => {
    async function fetch() {
          try {
              const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
              setPosts(data);
              console.log(data);
          } catch (err) {
              console.error(err);
          }
      }
    fetch();
  }, []);
  
  return (
    <>
        <h1>Hey</h1>
        {posts.map((el) => (
        <article key={el.id}>
          <Link to={`/post/${el.id}`}>
            <h1>{el.title}</h1>
          </Link>
          {/* <p>{el.body}</p> */}
        </article>
      ))}
    </>
  );
};

export default Home



// @src/pages/Home.jsx
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";

// function Home() {
  
//     const [posts, setPosts] = useState([]);
    
//   useEffect(() => {
//     async function fetch() {
//           try {
//               const { data } = await axios.get("http://localhost:3000/api/allbookings/");
//               setPosts(data);
//               console.log(data);
//           } catch (err) {
//               console.error(err);
//           }
//       }
//     fetch();
//   }, []);
  
//   return (
//     <>
//         <h1>Hey</h1>
//         {posts.map((el) => (
//         <article key={el._id}>
//           <Link to={`/post/${el._id}`}>
//             <h1>Space: {el.spaceid.spacename}</h1>
//             </Link>
//             <h3>User: {el.user.name}</h3>
//             <h3>Booking Start: {el.bookingstart}</h3>
//             <h3>Booking End: {el.bookingstart}</h3>
          
//         </article>
//       ))}
//     </>
//   );
// };

// export default Home
