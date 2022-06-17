import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { registeradmin, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const errorClassName = "text-red md:col-span-2 pl-2.5"
const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"

const CreateUser = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            password2: ""
        }, 

        validationSchema: Yup.object ({
            name: Yup.string() 
                .min(4, 'Must be more than 4 characters')
                .max(40, 'Must be 40 characters or less')
                .required(),
            email: Yup.string()
                .email('Must be a valid email')
                .required('Email is required'),
            password: Yup.string()
                .min(4, 'Must be more than 4 characters')
                .max(40, 'Must be 40 characters or less')
                .required('Password is required'),
            password2: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),

        onSubmit: values => {
                const userData = [
                    ['name', values.name], 
                    ['email', values.email],
                    ['password', values.password],
                    ['role', 'user'],
                    ['blocked', 'false']
                ]
                const registerData = Object.fromEntries(userData)
                dispatch(registeradmin(registerData))
        },
    })

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        // react-redux gets state from global 'auth' state   
        (state) => state.auth
    )

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // ifSuccess or user is logged in 
        if(isSuccess){
            toast.success('Success! User created')
            navigate('/manageusers')
        }

        dispatch(reset())
        
        }, [user, isError, isSuccess, message, navigate, dispatch]
    )

    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='mb-5 pr-5'>
                <h1>
                    Create a new User.
                </h1>
            </section>
        
            <section>
                <form className={formClassName} onSubmit={formik.handleSubmit}>

                    {formik.touched.name && formik.errors.name ? (
                        <span className={errorClassName}>{formik.errors.name}</span>
                    ) : null}
                    <input 
                        type="text" 
                        className={inputClassName}
                        id="name" 
                        name="name" 
                        placeholder="Admin username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />

                    {formik.touched.email && formik.errors.email ? (
                        <span className={errorClassName}>{formik.errors.email}</span>
                    ) : null}
                    <input 
                        type="text" 
                        className={inputClassName}
                        id="email" 
                        name="email" 
                        placeholder="Admin email" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />

                    {formik.touched.password && formik.errors.password ? (
                        <span className={errorClassName}>{formik.errors.password}</span>
                    ) : null}
                    <input 
                        type="password" 
                        className={inputClassName}
                        id="password" 
                        name="password" 
                        placeholder="Admin password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />

                    {formik.touched.password2 && formik.errors.password2 ? (
                        <span className={errorClassName}>{formik.errors.password2}</span>
                    ) : null}
                    <input 
                        type="password" 
                        className={inputClassName}
                        id="password2" 
                        name="password2" 
                        placeholder="Confirm password" 
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password2}
                    />

                    <button className='bg-orangey rounded-lg p-5 mb-5' type="submit">
                        <h2>Create User</h2>
                    </button>
                </form>
            </section>
        </>
    )
}

export default CreateUser
