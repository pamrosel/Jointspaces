import { FaAsterisk, FaTimes, FaQuestionCircle } from 'react-icons/fa'
import SignIn from '../components/SignIn'
import Darkmode from '../components/Darkmode'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import Logout from '../components/Logout'

function Header() {

  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <header className='header'>
          <div id="logo" className='px-5'>
              <Link to="/space">
                <h1 className='leading-loose'>Jointspaces</h1>
              </Link>
              <span className='pt-5 text-2xl'><a className=" transition duration-150 ease-in-out" data-bs-toggle="offcanvas" href="#offcanvasRight" role="button" aria-controls="offcanvasRight"><FaAsterisk /></a></span>
          </div>
      </header>

      <div className="offcanvas offcanvas-end fixed bottom-0 flex flex-col max-w-full invisible bg-clip-padding shadow-sm outline-none transition duration-300 ease-in-out top-0 right-0 border-none w-96" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header flex items-center justify-between p-4">
          <button type="button" data-bs-dismiss="offcanvas" aria-label="Close"><span className='text-3xl'><FaTimes /></span></button>
        </div>
        <div className="offcanvas-body flex-grow p-4 overflow-y-auto">
          
          { user ? (
                  <>

                    { user.role === 'admin' ? (
                    <Link to="/admin">
                      <button className='border-2 rounded-lg p-3 mb-5 w-full' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <h3>Admin Panel</h3>
                      </button>
                    </Link>
                    ) : (<></>)}

                    
                    <Link to="/space">
                      <button className='border-2 rounded-lg p-3 mb-5 w-full' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <h3>Shared Jointspaces</h3>
                      </button>
                    </Link>
                    <Link to="/">
                      <button className='border-2 rounded-lg p-3 mb-5 w-full' type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                        <h3>Created Jointspaces</h3>
                      </button>
                    </Link>
                      <button className='border-2 rounded-lg p-3 mb-5 w-full'>
                        <h3>My Bookings</h3>
                      </button>
                    <Darkmode />
                    <Link to="/help">
                      <button className='border-2 rounded-lg p-3 mb-5 w-full' data-bs-dismiss="offcanvas"  aria-label="Close">
                        <h3>
                          <FaQuestionCircle className='inline'/> Help
                        </h3>
                      </button>
                    </Link>
          
                    <Logout />
                  </>
              ) : (
                <>
                  <h2>
                      Jointspaces allows you to share your spaces across trusted networks of friends, family and peers. It's community building and it's free to use.
                  </h2>
                  <SignIn />
                </>
              )
          }
        </div>
      </div>
    </>
  )
}

export default Header