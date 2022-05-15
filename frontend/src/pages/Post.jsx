import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Post() {

    // useParams declares id as parameter moving into space single 
    // defined in route path post/:id
    const { id } = useParams();
    let navigate = useNavigate();
    const [post, SetPost] = useState({});
    
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
                SetPost(data);
            } catch (err) {
                console.error(err);
            }
        };
        fetch();
    }, []);
    
    return (
        <article>
            <h1>{post.title} { id }</h1>
            <p>{post.body}</p>
            <br />
            <button onClick={() => navigate("/home")}>Go back</button>
        </article>
    );
}

export default Post;