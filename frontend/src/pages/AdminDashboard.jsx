import { useSelector } from 'react-redux'
import { FaUserPlus, FaAddressBook, FaClipboardList } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

function AdminDashboard() {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
  
    return ( 
      <>
            
            { user.role === 'admin' ? (
                    <>
                        <h2>admin</h2>
                    </>
                ) : (
                    <>
                        <h2>user</h2>
                    </>
            )}



            <section className='mb-8'>
                <h1>{user && user.name}, you are logged in as {user && user.role}.</h1>
            </section>

            <section>

                <button className='rounded-lg w-full p-4 mb-5 bg-pinky'>
                    <span className='inline-block pr-4'><FaUserPlus /></span>
                    <Link to='/createadmin'> 
                        <h2 className="inline-block">Create Admin</h2>
                    </Link>
                </button>

                <button className='rounded-lg w-full p-4 mb-5 bg-orangey'>
                    <span className='inline-block pr-4'><FaUserPlus /></span>
                    <Link to='/createuser'> 
                        <h2 className="inline-block">Create User</h2>
                    </Link>
                </button>

                <button className='bg-greeny rounded-lg w-full p-4 mb-5'>
                    <span className='inline-block pr-4'><FaAddressBook /></span>
                    <Link to='/manageusers'> 
                        <h2 className="inline-block">Manage Users</h2>
                    </Link>
                </button>

                <button className='bg-greeny rounded-lg w-full p-4 mb-5'>
                    <span className='inline-block pr-4'><FaAddressBook /></span>
                    <Link to='/manageadmin'> 
                        <h2 className="inline-block">Manage Admin</h2>
                    </Link>
                </button>

                <button className='bg-greyish rounded-lg w-full p-4 mb-5'>
                    <span className='inline-block pr-4'><FaClipboardList /></span>
                    <Link to='/activitylog'> 
                        <h2 className="inline-block">Activity Log</h2>
                    </Link>
                </button>
            </section>
      </>
    )
  }
  
  export default AdminDashboard