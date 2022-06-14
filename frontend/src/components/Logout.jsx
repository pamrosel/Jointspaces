import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/loggedout')
        localStorage.setItem('usertype', 'unauthorized')
    }

    return (
        <button className='border-2 rounded-lg p-3 mb-5 w-full' data-bs-dismiss="offcanvas" aria-label="Close" onClick={onLogout}>
            <h3>
                <FaSignOutAlt className='inline'/> Logout
            </h3>
        </button>
    )
}

export default Header