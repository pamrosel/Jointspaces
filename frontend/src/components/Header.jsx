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
              <h1 className='leading-loose'>Jointspaces</h1>
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
                    <Link to="/space">
                    <h3 data-bs-dismiss="offcanvas"  aria-label="Close">
                      Shared Jointspaces
                    </h3>
                    </Link>
                    <Link to="/">
                    <h3 data-bs-dismiss="offcanvas"  aria-label="Close">
                      Created Jointspaces
                    </h3>
                    </Link>
                    <h3>My Bookings</h3>
                    <Darkmode />
                    <Logout />
                    <button className='btn block mt-5'>
                      <FaQuestionCircle /> Help
                    </button>
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