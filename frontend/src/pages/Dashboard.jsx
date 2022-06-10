import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import SpaceItem from '../components/SpaceItem'
import Spinner from '../components/Spinner'
import { getSpaces, reset } from '../features/spaces/spaceSlice'
import CreateJointspaceButton from '../components/CreateJointspaceButton'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { spaces, isLoading, isError, message } = useSelector(
    (state) => state.spaces
  )

  useEffect(() => {
    if(isError) {
      console.log(message)
    } else {
      dispatch(reset())
    }
    if(user) {
      dispatch(getSpaces())
    } else {
      navigate('/login')
    }
  }, [user, navigate, isError, message, dispatch])

  if(isLoading) {
    return <Spinner />
  }

  return ( 
    <>
      <section className='mb-8'>
        <h1>{user && user.name}, these are the spaces you've created.</h1>
      </section>

      <section className="content">
        {spaces.length > 0 ? (
          <div className="spaces">
            {spaces.map((space) => (
              <SpaceItem key={space._id} space={space}/>
            ))}
          </div>
        ) : (
          <h3>You have not created any spaces</h3>
        )}
      </section>

      <CreateJointspaceButton />
    </>
  )
}

export default Dashboard