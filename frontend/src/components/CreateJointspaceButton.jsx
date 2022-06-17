import { FaPlus } from 'react-icons/fa'
import { Link } from "react-router-dom";

const CreateJointspaceButton = () => {
    return (
        <section>
            <button className='outline-dashed outline-2 rounded-lg w-full p-4 mb-5'>
                <span className='inline-block pr-4'><FaPlus /></span>
                <Link to='/createspace'> 
                    <h2 className="inline-block">Create a JointSpace</h2>
                </Link>
            </button>
        </section>
    )
}

export default CreateJointspaceButton