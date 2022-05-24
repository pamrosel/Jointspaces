import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createSpace } from '../features/spaces/spaceSlice'
import { FaPlus } from 'react-icons/fa'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"
const errorClassName = "text-red-500 md:col-span-2 hidden"

// reset fields using initialValues object from formik
const initialValues = {
    spacename: "",
    description: "",
    rules: "",
    address: "",
    suburb: "",
    capacity: "",
    spacetype: "",
    spaceusers: "",
    spaceimage: ""
  };
  

const SpaceForm = () => {

    // spaceFormData uses useState to reset values for the space form
    const [spaceFormData, setspaceFormData] = useState({
        spacename: '',
        description: '',
        rules: '',
        address: '',
        suburb: '',
        capacity: '',
        spacetype: '',
        spaceusers: '',
        spaceimage: '',
    })

    // let spaceFormData object contain these subvalues 
    const {
        spacename,
        description,
        rules,
        address,
        suburb,
        capacity,
        spacetype,
        spaceusers,
        spaceimage
    } = spaceFormData

    // declare dispatch from react-redux 
    const dispatch = useDispatch()

    // group onChange event for subvalues to attach to spaceFormData object
    const onChange = (e) => {
        setspaceFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    // dispatch spaceData to createSpace function 
    const onSubmit = e => {
        e.preventDefault()

        const spaceData = {
            spacename,
            description,
            rules,
            address,
            suburb,
            capacity,
            spacetype,
            spaceusers,
            spaceimage,
        }

        console.log(spaceData)

        // dispatch(createSpace(spaceData))

    }

    return (
        <section>
            <form className={formClassName} onSubmit={onSubmit}>
                <label htmlFor="spacename">Space Name <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spacename" 
                    id="spacename"
                    placeholder='Name your JointSpace'
                    value={spacename}
                    pattern="^([a-zA-Z'\-]){2,26}$"
                    onChange={onChange}
                    required
                />
            
                <label htmlFor="description">Description <span className={errorClassName}>is invalid</span></label>
                <textarea 
                    className={inputClassName}
                    name="description" 
                    id="description" 
                    rows="4"
                    placeholder='About this space'
                    value={description} 
                    pattern=".{,1000}"
                    onChange={onChange}
                    required
                />
            
                <label htmlFor="rules">Rules <span className={errorClassName}>is invalid</span></label>
                <textarea 
                    className={inputClassName}
                    name="rules" 
                    id="rules"
                    placeholder='Rules of the space'
                    rows="4" 
                    value={rules} 
                    onChange={onChange}
                />

                <label htmlFor="address">Address <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="address" 
                    id="address" 
                    placeholder='Street Address'
                    value={address} 
                    onChange={onChange}
                />

                <label htmlFor="suburb">Suburb <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="suburb" 
                    id="suburb" 
                    placeholder='Suburb'
                    value={suburb} 
                    onChange={onChange}
                />
                
                <label htmlFor="capacity">Capacity <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="capacity" 
                    id="capacity" 
                    placeholder='Capacity'
                    value={capacity} 
                    onChange={onChange}
                />
                
                <label htmlFor="spacetype">Single/Multi <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spacetype"
                    id="spacetype" 
                    placeholder='single/multi'
                    value={spacetype} 
                    onChange={onChange}
                />
                

                <label htmlFor="spaceusers">Invite Users <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceusers" 
                    id="spaceusers" 
                    placeholder='user@example.com'
                    value={spaceusers} 
                    onChange={onChange}
                />
                <div id="newusers"></div>
                <button className='outline-dashed outline-2 rounded-lg w-full p-3 mb-5'>
                    <span className='inline-block pr-4'><FaPlus /></span>
                    Add User
                </button>

                <label htmlFor="spaceimage">Image Path <span className={errorClassName}>is invalid</span></label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceimage" 
                    id="spaceimage" 
                    placeholder='Path to feature image'
                    value={spaceimage} 
                    onChange={onChange}
                />

                <button className='bg-pinky rounded-lg p-5 mb-5 text-plum' type="submit"><h2>Share my Jointspace</h2></button>
            </form>
        </section>
    )
}

export default SpaceForm


















// import { useState } from 'react'
// import { useDispatch } from 'react-redux'
// import { createSpace } from '../features/spaces/spaceSlice'
// import { FaPlus } from 'react-icons/fa'

// import { useFormik } from 'formik'
// import * as Yup from 'yup'

// const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
// const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"
// const errorClassName = "text-red-500 md:col-span-2 hidden"


// const SpaceForm = () => {

//     // reset fields using initialValues object from formik
//     const formik = useFormik({
//         initialValues: {
//             spacename: "",
//             description: "",
//             rules: "",
//             address: "",
//             suburb: "",
//             capacity: "",
//             spacetype: "",
//             spaceusers: "",
//             spaceimage: ""
//         },

//         validationSchema: Yup.object({
//             spacename: Yup.string()
//                 .max(40, 'Must be 40 characters or less')
//                 .required('Name of the space is required'),
//             description: Yup.string()
//                 .max(5000, 'Description cannot be over 5000 characters')
//                 .required('Description is required'),
//             rules: Yup.string()
//                 .max(5000, 'Rules cannot be over 5000 characters'),
//             address: Yup.string()
//                 .max(150, 'Cannot be over 150 characters')
//                 .required('Address is required'),
//             suburb: Yup.string()
//                 .max(100, 'Cannot be over 100 characters')
//                 .required('Suburb is required'),
//             capacity: Yup.number()
//                 .min(1, 'Capacity cannot be 0')
//                 .max(500, 'Cannot host spaces of over 500 capacity'),
//             spacetype: Yup.mixed()
//                 .oneOf(['single', 'multi'])
//                 .required('Space type is required'),
//             spaceusers: Yup.string()
//                 .max(150, 'Cannot be over 150 characters')
//                 .required('A space user is required'),
//             spaceimage: Yup.string()
//                 .max(300, 'Cannot be over 300 characters')
//                 .required('Image path is required'),
//         }),
//         onSubmit: values => {

//             alert(JSON.stringify(values, null, 2));
     
//         },
//     })

//     return (
//         <section>
//             <form className={formClassName} onSubmit={onSubmit}>
//                 <label htmlFor="spacename">Space Name <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="spacename" 
//                     id="spacename"
//                     placeholder='Name your JointSpace'
//                     value={spacename}
//                     pattern="^([a-zA-Z'\-]){2,26}$"
//                     onChange={onChange}
//                     required
//                 />
            
//                 <label htmlFor="description">Description <span className={errorClassName}>is invalid</span></label>
//                 <textarea 
//                     className={inputClassName}
//                     name="description" 
//                     id="description" 
//                     rows="4"
//                     placeholder='About this space'
//                     value={description} 
//                     pattern=".{,1000}"
//                     onChange={onChange}
//                     required
//                 />
            
//                 <label htmlFor="rules">Rules <span className={errorClassName}>is invalid</span></label>
//                 <textarea 
//                     className={inputClassName}
//                     name="rules" 
//                     id="rules"
//                     placeholder='Rules of the space'
//                     rows="4" 
//                     value={rules} 
//                     onChange={onChange}
//                 />

//                 <label htmlFor="address">Address <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="address" 
//                     id="address" 
//                     placeholder='Street Address'
//                     value={address} 
//                     onChange={onChange}
//                 />

//                 <label htmlFor="suburb">Suburb <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="suburb" 
//                     id="suburb" 
//                     placeholder='Suburb'
//                     value={suburb} 
//                     onChange={onChange}
//                 />
                
//                 <label htmlFor="capacity">Capacity <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="capacity" 
//                     id="capacity" 
//                     placeholder='Capacity'
//                     value={capacity} 
//                     onChange={onChange}
//                 />
                
//                 <label htmlFor="spacetype">Single/Multi <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="spacetype"
//                     id="spacetype" 
//                     placeholder='single/multi'
//                     value={spacetype} 
//                     onChange={onChange}
//                 />
                

//                 <label htmlFor="spaceusers">Invite Users <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="spaceusers" 
//                     id="spaceusers" 
//                     placeholder='user@example.com'
//                     value={spaceusers} 
//                     onChange={onChange}
//                 />
//                 <div id="newusers"></div>
//                 <button className='outline-dashed outline-2 rounded-lg w-full p-3 mb-5'>
//                     <span className='inline-block pr-4'><FaPlus /></span>
//                     Add User
//                 </button>

//                 <label htmlFor="spaceimage">Image Path <span className={errorClassName}>is invalid</span></label>
//                 <input 
//                     type="text" 
//                     className={inputClassName}
//                     name="spaceimage" 
//                     id="spaceimage" 
//                     placeholder='Path to feature image'
//                     value={spaceimage} 
//                     onChange={onChange}
//                 />

//                 <button className='bg-pinky rounded-lg p-5 mb-5 text-plum' type="submit"><h2>Share my Jointspace</h2></button>
//             </form>
//         </section>
//     )
// }

// export default SpaceForm











