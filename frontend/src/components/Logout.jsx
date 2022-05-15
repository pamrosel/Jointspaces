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
    }

    return (
        <button className='btn block' data-bs-dismiss="offcanvas" aria-label="Close" onClick={onLogout}>
            <FaSignOutAlt /> Logout
        </button>
    )
}

export default Header