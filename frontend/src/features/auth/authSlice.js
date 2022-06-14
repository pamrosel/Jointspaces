// Reducers & Initial State using Redux 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import authService from './authService'

// Get user from localStorage 
// Local storage can only hold strings = parse
const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    users: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user 
export const register = createAsyncThunk('auth/register', 
    async(user, thunkAPI) => {
        try {
            return await authService.register(user)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// Register admin 
export const registeradmin = createAsyncThunk('auth/registeradmin', 
    async(user, thunkAPI) => {
        try {
            console.log('hey register admin slice')
            return await authService.registeradmin(user)
        } catch (error) {
            const message = (error.response && error.response.data && error.response.data.message) 
            || error.message
            || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
})

// Login user 
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) 
        || error.message
        || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Logout user
export const logout = createAsyncThunk ('auth/logout', async() => {
    await authService.logout()
})

// Delete user
export const deleteUser = createAsyncThunk(
    'id/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await authService.deleteUser(id, token)
        } catch (error) {
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete admin
export const deleteAdmin = createAsyncThunk(
    'adminid/delete',
    async (id, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await authService.deleteAdmin(id, token)
        } catch (error) {
            const message = 
            (error.response && 
                error.response.data && 
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
        }
    }
)


export const authSlice = createSlice ({
    name: 'auth',
    initialState, 
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
            // Redux automatically handles states pending, fulfilled and rejected 
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload 
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(registeradmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registeradmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(registeradmin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload 
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(deleteUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = state.users.filter(
                    (user) => user._id !== action.payload.id
                )
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
            .addCase(deleteAdmin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteAdmin.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.users = state.users.filter(
                    (user) => user._id !== action.payload.id
                )
            })
            .addCase(deleteAdmin.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true 
                state.message = action.payload
            })
    }
})

export const { reset } = authSlice.actions
export default authSlice.reducer

// authSlice reducer brought into store.js