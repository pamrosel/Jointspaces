import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from 'react-toastify'

function EditUser() {

    const navigate = useNavigate()
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

    const [putResult, setPutResult] = useState(null);
    
    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function blockUser(e){
        e.preventDefault()
        let checkbox = document.getElementById('userblock')
        let values 

        if(checkbox.checked) {
        // if checkbox is checked, add block    
        values = user
        Object.assign(user, {"blocked":true})
        } else {
        // if checkbox is not checked, remove block
        values = user
        Object.assign(user, {"blocked":false})
        }
        // console.log(values)
        // console.log('api/allusers/'+user._id)
        
        try {
            const res = await fetch(`/api/allusers/${userid}`, {
                method: 'put',
                headers: {
                    'Content-Type': 'application/json',
                    'Bearer': user.token,
                },
                body: JSON.stringify(values),
            });

            if (!res.ok) {
                const message = 'response is not ok';
                throw new Error(message);
            }

            const data = await res.json();
            const result = {
                status: res.status + "-" + res.statusText,
                headers: { "Content-Type": res.headers.get('Content-Type')},
                data: data,
            };
            setPutResult(formatResponse(result));
            toast.success('Success! User updated')
            navigate('/manageusers')
        } catch (err) {
            setPutResult(err.message);
        }}

    if(user.blocked) {
        document.getElementById('userblock').checked = true
    } 

    return (
        <>
            <form onSubmit={blockUser}>
                <article className="bg-greeny rounded-lg mb-8 px-4 pb-4 relative">
                    <ul>
                        <li><h2 className="pt-2">Username: {user.name}</h2></li>
                        <li>ID: {user._id}</li>
                        <li>Email: {user.email}</li>
                        <li>Role: {user.role}</li>
                    </ul>
                    <input type="checkbox" id="userblock" value="blocked" className='mr-2'/>
                    <label className="form-check-label inline-block" for="userblock"></label>
                    
                </article>
                <button className='bg-pinky rounded-lg p-5 w-full' type="submit"><h2>Update User</h2></button>
            </form>
        </>
    );
}

export default EditUser;