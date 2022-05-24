import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import bookingService from './bookingService'

// Redux initialState reset values 
const initialState = {
    bookings: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new booking
export const createBooking = createAsyncThunk('bookings/create', 
    async(bookingData, thunkAPI) => {
        try {
            // need to get auth token using thunkAPI
            const token = thunkAPI.getState().auth.user.token
            return await bookingService.createBooking(bookingData, token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// GET user bookings
export const getBookings = createAsyncThunk(
    'bookings/getAll', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await bookingService.getBookings(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// Delete booking
export const deleteBooking = createAsyncThunk('bookings/delete', 
    async(id, thunkAPI) => {
        try {
            // need to get auth token using thunkAPI
            const token = thunkAPI.getState().auth.user.token
            return await bookingService.deleteBooking(id, token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const bookingSlice = createSlice({
    name: 'booking',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createBooking.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                // Redux toolkit allows push on action.payload to create new booking
                state.bookings.push(action.payload)
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
            .addCase(getBookings.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBookings.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bookings = action.payload
            })
            .addCase(getBookings.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
            .addCase(deleteBooking.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.bookings = state.bookings.filter(
                    (booking) => booking._id !== action.payload.id
                )
            })
            .addCase(deleteBooking.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
    },
})

export const { reset } = bookingSlice.actions 
export default bookingSlice.reducer