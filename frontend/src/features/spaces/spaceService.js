import axios from 'axios'

const API_URL = '/api/spaces/'

// Create new space 
const createSpace = async (spaceData, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.post(API_URL, spaceData, config)

    return response.data
}

// Get user spaces
const getSpaces = async (token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.get(API_URL, config)

    return response.data
}

// Delete space

const deleteSpace = async (spaceId, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    }

    const response = await axios.delete(API_URL + spaceId, config)

    return response.data
}


const spaceService = {
    createSpace,
    getSpaces,
    deleteSpace,
}

export default spaceService