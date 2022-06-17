import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookingForm from '../components/BookingForm'

function SpaceBookings() {
    const { bookingfromspaceid } = useParams();

    const [space, SetSpace] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`/api/spacebookings/${bookingfromspaceid}`)
                SetSpace(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, [bookingfromspaceid]);

    const [booking, SetBooking] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`/api/bookings/${bookingfromspaceid}`)
                SetBooking(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, [bookingfromspaceid]);
    
    return (
      <>
        <h1 className="mb-5">Upcoming Bookings at {space.spacename}:</h1>

        {booking.map((item, _id) => 
          <article key={item._id} className='bg-pinky rounded-lg p-4 mb-6'>
            <div>booking start: {item.bookingstart}</div>
            <div>booking end: {item.bookingend}</div> 
          </article>
        )}

        <h1 className="mb-5">Create a Booking</h1>
        <BookingForm />
      
      </>
    );
}

export default SpaceBookings;

