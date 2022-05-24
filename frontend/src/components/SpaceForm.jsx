import { useDispatch } from 'react-redux'
import { createSpace } from '../features/spaces/spaceSlice'
import { FaPlus } from 'react-icons/fa'

import { useFormik } from 'formik'
import * as Yup from 'yup'

const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"
const errorClassName = "text-red md:col-span-2 pl-2.5"


const SpaceForm = () => {

    // declare dispatch from react-redux 
    const dispatch = useDispatch()

    // reset fields using initialValues object from formik
    const formik = useFormik({
        initialValues: {
            spacename: "",
            description: "",
            rules: "",
            address: "",
            suburb: "",
            capacity: "",
            spacetype: "",
            spaceusers: "",
            spaceimage: ""
        },

        validationSchema: Yup.object({
            spacename: Yup.string()
                .max(40, 'Must be 40 characters or less')
                .required('is required'),
            description: Yup.string()
                .max(5000, 'Description cannot be over 5000 characters')
                .required('is required'),
            rules: Yup.string()
                .max(5000, 'Rules cannot be over 5000 characters'),
            address: Yup.string()
                .max(150, 'Cannot be over 150 characters')
                .required('is required'),
            suburb: Yup.string()
                .max(100, 'Cannot be over 100 characters')
                .required('is required'),
            capacity: Yup.number()
                .min(1, 'Capacity cannot be 0')
                .max(500, 'Cannot host spaces of over 500 capacity'),
            spacetype: Yup.mixed()
                .oneOf(['single', 'multi'])
                .required('is required'),
            spaceusers: Yup.string()
                .max(150, 'Cannot be over 150 characters')
                .required('is required'),
            spaceimage: Yup.string()
                .max(300, 'Cannot be over 300 characters')
                .required('is required'),
        }),

        onSubmit: values => {
            console.log(values)

            // use dispatch to post to createSpace
            dispatch(createSpace(values))
        },
    })

    return (
        <section>
            <form className={formClassName} onSubmit={formik.handleSubmit}>
                <label htmlFor="spacename">Space Name 
                {formik.touched.spacename && formik.errors.spacename ? (
                    <span className={errorClassName}>{formik.errors.spacename}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spacename" 
                    id="spacename"
                    placeholder='Name your JointSpace'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spacename}
                />
                
                <label htmlFor="description">Description
                {formik.touched.description && formik.errors.description ? (
                    <span className={errorClassName}>{formik.errors.description}</span>
                ) : null}
                </label>
                <textarea 
                    className={inputClassName}
                    name="description" 
                    id="description" 
                    rows="4"
                    placeholder='About this space'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
            
                <label htmlFor="rules">Rules
                {formik.touched.rules && formik.errors.rules ? (
                    <span className={errorClassName}>{formik.errors.rules}</span>
                ) : null}
                </label>
                <textarea 
                    className={inputClassName}
                    name="rules" 
                    id="rules"
                    placeholder='Rules of the space'
                    rows="4" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rules}
                />

                <label htmlFor="address">Address
                {formik.touched.address && formik.errors.address ? (
                    <span className={errorClassName}>{formik.errors.address}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="address" 
                    id="address" 
                    placeholder='Street Address'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.address}
                />

                <label htmlFor="suburb">Suburb
                {formik.touched.suburb && formik.errors.suburb ? (
                    <span className={errorClassName}>{formik.errors.suburb}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="suburb" 
                    id="suburb" 
                    placeholder='Suburb'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.suburb}
                />
                
                <label htmlFor="capacity">Capacity
                {formik.touched.capacity && formik.errors.capacity ? (
                    <span className={errorClassName}>{formik.errors.capacity}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="capacity" 
                    id="capacity" 
                    placeholder='Capacity'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.capacity}
                />
                
                <label htmlFor="spacetype">Single/Multi
                {formik.touched.spacetype && formik.errors.spacetype ? (
                    <span className={errorClassName}>{formik.errors.spacetype}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spacetype"
                    id="spacetype" 
                    placeholder='single/multi'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spacetype}
                />

                <label htmlFor="spaceusers">Invite Users
                {formik.touched.spaceusers && formik.errors.spaceusers ? (
                    <span className={errorClassName}>{formik.errors.spaceusers}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceusers" 
                    id="spaceusers" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spaceusers}
                />
                <div id="newusers"></div>

                <button 
                    className='outline-dashed outline-2 rounded-lg w-full p-3 mb-5'
                >
                    
                    <span className='inline-block pr-4'><FaPlus /></span>
                    Add User
                </button>

                <label htmlFor="spaceimage">Image Path
                {formik.touched.spaceimage && formik.errors.spaceimage ? (
                    <span className={errorClassName}>{formik.errors.spaceimage}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceimage" 
                    id="spaceimage" 
                    placeholder='Path to feature image'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spaceimage}
                />

                <button className='bg-pinky rounded-lg p-5 mb-5 text-plum' type="submit"><h2>Share my Jointspace</h2></button>
            </form>
        </section>
    )
}

export default SpaceForm











