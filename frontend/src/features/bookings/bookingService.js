import axios from 'axios'

const API_URL = '/api/bookings/'

// Create new booking 
const createBooking = async (bookingData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, bookingData, config)

    return response.data
}

// Get user bookings
const getBookings = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete booking

const deleteBooking = async (bookingId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + bookingId, config)

    return response.data
}


const bookingService = {
    createBooking,
    getBookings,
    deleteBooking,
}

export default bookingService