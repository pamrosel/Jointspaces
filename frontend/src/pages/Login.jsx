import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../features/auth/authSlice'
import Spinner from '../components/Spinner'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const errorClassName = "text-red md:col-span-2 pl-2.5"
const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"

const Login = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Fetches the current users IP address and matches it to whitelist
    useEffect(() => {
        // Const adminIp = only whitelisted IP
        const adminIp = "117.20.68.92"
        fetch('https://api.ipify.org/?format=json')
        .then(result => result.json())
            .then((data) => {                
                // If users ip does not match whitelisted IP, navigate to 404 
                console.log(data.ip)
                if(adminIp === data.ip){
                    toast.error('You are an admin!');
                    navigate ('/adminlogin');
                }
            })
        })
    
    // Form validation using Formik & Yup schema 
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object ({
            email: Yup.string()
                .email('Must be a valid email')
                .required('Email is required'),
            password: Yup.string()
                .min(4, 'Must be more than 4 characters')
                .max(40, 'Must be 40 characters or less')
                .required('Password is required')
        }),
        onSubmit: values => {
            dispatch(login(values))
        },
    })

    const { user, isLoading, isError, isSuccess, message } = useSelector(
    // react-redux gets state from global 'auth' state   
    (state) => state.auth)
    
    useEffect(() => {
        // If a 'user' logs in successfully, navigate to Shared Spaces 
        if(isSuccess && user.role === 'user'){
            navigate('/spaces')
        }
        // If an 'admin' logs in successfully, navigate to Admin Panel 
        if(isSuccess && user.role === 'admin'){
            navigate('/admin')
        }
        if(isError) {
            toast.error(message)
        }
        dispatch(reset())
        }, [user, isError, isSuccess, message, navigate, dispatch]
    )

    // If state isLoading show spinner 
    if(isLoading) {
        return <Spinner />
    }

    return (
        <>
            <section className='pr-10 mb-5'>
                <h1>Login and start using JointSpaces.</h1>
            </section>
        
            <section>
                <form className={formClassName} onSubmit={formik.handleSubmit}>
                    {formik.touched.email && formik.errors.email ? (
                        <span className={errorClassName}>{formik.errors.email}</span>
                    ) : null}
                    <input 
                        type="text" 
                        className={inputClassName}
                        id="email" 
                        name="email" 
                        placeholder="Enter your email" 
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
                        placeholder="Enter password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                    />
                    <button className='bg-pinky rounded-lg p-5 mb-5' type="submit"><h2>Login</h2></button>
                </form>
            </section>

            <section>
                <h3 className='text-center'><Link className='underline' to='/register'>I don't have an account</Link></h3>
            </section>
        </>
    )
}

export default Login
