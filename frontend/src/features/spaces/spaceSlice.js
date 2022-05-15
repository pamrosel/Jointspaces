import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import spaceService from './spaceService'

// Redux initialState reset values 
const initialState = {
    spaces: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new space
export const createSpace = createAsyncThunk('spaces/create', 
    async(spaceData, thunkAPI) => {
        try {
            // need to get auth token using thunkAPI
            const token = thunkAPI.getState().auth.user.token
            return await spaceService.createSpace(spaceData, token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// GET user spaces
export const getSpaces = createAsyncThunk(
    'spaces/getAll', 
    async (_, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await spaceService.getSpaces(token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// Delete space
export const deleteSpace = createAsyncThunk('spaces/delete', 
    async(id, thunkAPI) => {
        try {
            // need to get auth token using thunkAPI
            const token = thunkAPI.getState().auth.user.token
            return await spaceService.deleteSpace(id, token)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

export const spaceSlice = createSlice({
    name: 'space',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createSpace.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createSpace.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                // Redux toolkit allows push on action.payload to create new space
                state.spaces.push(action.payload)
            })
            .addCase(createSpace.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
            .addCase(getSpaces.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getSpaces.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.spaces = action.payload
            })
            .addCase(getSpaces.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
            .addCase(deleteSpace.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteSpace.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.spaces = state.spaces.filter(
                    (space) => space._id !== action.payload.id
                )
            })
            .addCase(deleteSpace.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
    },
})

export const { reset } = spaceSlice.actions 
export default spaceSlice.reducer