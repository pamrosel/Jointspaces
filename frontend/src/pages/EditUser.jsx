import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaQuestionCircle } from 'react-icons/fa'

function EditUser() {
    const { userid } = useParams();

    const [user, SetUser] = useState([]);

    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`/api/allusers/${userid}`)
                SetUser(data)
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, [userid]);

    function blockUser(){
        // e.preventDefault()
        let checkbox = document.getElementById('userblock')

        if(checkbox.checked) {
        // if checkbox is checked, add block    
        var values = user
        Object.assign(user, {"blocked":"true"})
        console.log(user)
        } else {
        // if checkbox is not checked, remove block
        let values = {
        '_id': user._id,
        'name': user.name,
        'email': user.email, 
        'password': user.password,
        'blocked': false,
        }
        console.log(values)
        }
        // dispatch(EditUser(values))
    }

    return (
        <>
        <form onSubmit={blockUser}>
          <article className="bg-greeny rounded-lg mb-8 px-4 pb-4 relative">

            <ul>
                <li><h2 className="pt-2">Username: {user.name}</h2></li>
                <li>ID: {user._id}</li>
                <li>email: {user.email}</li>
                <li>role: {user.role}</li>
            </ul>
            
                <input type="checkbox" id="userblock" value="blocked"/>
                <label className="form-check-label inline-block" for="userblock">Block User</label>
            
          </article>

            <button className='bg-pinky rounded-lg p-5 w-full' type="submit"><h2>Update User</h2></button>
        </form>
        </>
    );
}

export default EditUser;