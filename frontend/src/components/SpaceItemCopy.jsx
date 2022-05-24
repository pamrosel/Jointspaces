import { useDispatch } from 'react-redux'
import { deleteSpace } from '../features/spaces/spaceSlice'

function SpaceItem({ space }) {
  
    const dispatch = useDispatch()
  
    return (
    <div className='space'>
        <div>
            {new Date(space.createdAt).toLocaleString('en-US')}
        </div>
        <h2>
            {space.spacename}
        </h2>
        <button 
            className="close" 
            onClick={() => dispatch(deleteSpace(space._id))}>
            X
        </button>
        <p>
            {space.description}
        </p>
        <p>
            {space.rules}
        </p>
        <p>
            {space.address}
        </p>
        <p>
            {space.suburb}
        </p>
        <p>
            {space.capacity}
        </p>
        <p>
            {space.spacetype}
        </p>
        <p>
            {space.spaceusers}
        </p>
        
    </div>
  )
}

export default SpaceItem