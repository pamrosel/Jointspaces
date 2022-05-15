import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from "axios";
import BookingForm from '../components/BookingForm'

function SpaceBookings() {
    const { bookingfromspaceid } = useParams();
    
    
    let navigate = useNavigate();
    

  //   const { user, isLoading, isError, isSuccess, message } = useSelector(
  //     // react-redux gets state from global 'auth' state   
  //     (state) => state.auth)

  // useEffect(() => {
  //     if(isError) {
  //         toast.error(message)
  //     }

  //     // ifSuccess or user is logged in 
  //     if(isSuccess || user){
  //         navigate('/')
  //     }

  //     dispatch(reset())

  //     }, [user, isError, isSuccess, message, navigate, dispatch]
  // )

    const [space, SetSpace] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/spacebookings/${bookingfromspaceid}`)
                SetSpace(data)
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, []);

    const [booking, SetBooking] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`http://localhost:3000/api/bookings/${bookingfromspaceid}`)
                SetBooking(data)
                console.log(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, []);
    
    return (
      <>
        <h1 className="mb-5">Upcoming Bookings at {space.spacename}:</h1>

        {booking.map((item, _id) => 
          <article key={item._id} className='bg-pinky rounded-lg p-4 mb-6 text-plum'>
             <div>User: {item.user.name}</div>
            <div>booking start: {item.bookingstart}</div>
            <div>booking end: {item.bookingend}</div> 
          </article>
        )}

        <h1 className="mb-5">Create a Booking</h1>
        <BookingForm />

        {/* <button onClick={() => navigate("/space")}>
          Go back
        </button> */}
      
      </>
    );
}

export default SpaceBookings;



// {booking.map((item) => 
//   <article key={item._id} className='bg-white rounded-lg p-4 mb-6 text-plum'>
//     <div>booking starts: {item.bookingstart}</div>
//     <div>booking ends: {item.bookingend}</div> 
//   </article>
// )}