import { useDispatch } from 'react-redux'
import { createSpace } from '../features/spaces/spaceSlice'
import { FaPlus, FaPen, FaImage, FaHouseUser, FaListAlt, FaMapMarkerAlt, FaMapMarker, FaUserPlus, FaRegCalendarAlt, FaPlusCircle, FaQuestionCircle } from 'react-icons/fa'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"
const errorClassName = "text-red md:col-span-2 pl-2.5"
const formiconClassName = "absolute right-3 opacity-40 -bottom-9 z-0"


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

    var countBox = 1;
    function addUser(){ 
        document.getElementById('newfields').innerHTML+='<br/><input type="text" id="spaceusers" class="rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white w-full" name="spaceusers" placeholder="user email" /><br/>'
        countBox += 1;
        console.log(countBox)
    }

    return (
        <section>
            <form className={formClassName} onSubmit={formik.handleSubmit}>
                <label htmlFor="spacename" className='relative'><FaHouseUser className={formiconClassName}/>Space Name 
                {formik.touched.spacename && formik.errors.spacename ? (
                    <span className={errorClassName}>{formik.errors.spacename}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spacename" 
                    id="spacename"
                    placeholder='Name your Jointspace'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spacename}
                />
                
                <label htmlFor="description" className='relative'><FaPen className={formiconClassName}/>Description
                {formik.touched.description && formik.errors.description ? (
                    <span className={errorClassName}>{formik.errors.description}</span>
                ) : null}
                </label>
                <textarea 
                    className={inputClassName}
                    name="description" 
                    id="description" 
                    rows="4"
                    placeholder='A short description about this space and your intention in share it.'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.description}
                />
            
                <label htmlFor="rules" className='relative'><FaListAlt className={formiconClassName}/>Rules
                {formik.touched.rules && formik.errors.rules ? (
                    <span className={errorClassName}>{formik.errors.rules}</span>
                ) : null}
                </label>
                <textarea 
                    className={inputClassName}
                    name="rules" 
                    id="rules"
                    placeholder='The rules of using this space, to maintain it easier as a community.'
                    rows="4" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.rules}
                />

                <label htmlFor="address" className='relative'><FaMapMarkerAlt className={formiconClassName}/>Address
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

                <label htmlFor="suburb" className='relative'><FaMapMarker className={formiconClassName}/>Suburb 
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
                
                <label htmlFor="capacity" className='relative'><FaUserPlus className={formiconClassName}/>Capacity
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
                
                <label htmlFor="spacetype" className='relative'><FaRegCalendarAlt className={formiconClassName}/>Is this a single or multi bookings space?
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

                <details className='mb-5'>   
                    <summary>What does single or multi mean <FaQuestionCircle className='inline'/></summary>
                    <p><br/>Single<br/>
                    If this is a 'single' bookings space, it can be booked by one user at a time, even if that is on the behalf of a group.<br/><br/>
                    Multi<br/>
                    If this is a 'multi' bookings space, it can be booked by multiple users at any one time.
                    </p>
                </details> 

                <label htmlFor="spaceusers" className='relative'><FaPlusCircle className={formiconClassName}/>Invite Users
                {formik.touched.spaceusers && formik.errors.spaceusers ? (
                    <span className={errorClassName}>{formik.errors.spaceusers}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceusers" 
                    id="spaceusers" 
                    placeholder="user email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spaceusers}
                />

                <span id="newfields"></span>

                <button type="button" className='outline-dashed outline-2 rounded-lg w-full p-3 mb-5' onClick={addUser}>
                    <span className='inline-block pr-4'><FaPlus /></span>
                    Add User
                </button>

                <label htmlFor="spaceimage" className='relative'><FaImage className={formiconClassName}/>Feature Image
                {formik.touched.spaceimage && formik.errors.spaceimage ? (
                    <span className={errorClassName}>{formik.errors.spaceimage}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceimage" 
                    id="spaceimage" 
                    placeholder='http://imagehost.com/yourimage'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spaceimage}
                />

                <details className='mb-5'>   
                    <summary>How to add an a Feature image <FaQuestionCircle className='inline'/></summary>
                    <p><br/>We currently require you to link an externally hosted feature image. 
                    </p>
                </details> 

                <button className='bg-pinky rounded-lg p-5 mb-5' type="submit"><h2>Create Jointspace</h2></button>
            </form>
        </section>
    )
}

export default SpaceForm











