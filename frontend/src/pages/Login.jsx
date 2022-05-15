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
            console.log(values)
            dispatch(login(values))
        },
        
    })

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        // react-redux gets state from global 'auth' state   
        (state) => state.auth)

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }

        // ifSuccess or user is logged in 
        if(isSuccess || user){
            navigate('/')
        }

        dispatch(reset())

        }, [user, isError, isSuccess, message, navigate, dispatch]
    )

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










// import { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link, useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify'
// // import { FaSignInAlt } from 'react-icons/fa'
// import { login, reset } from '../features/auth/authSlice'
// import Spinner from '../components/Spinner'

// const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
// const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"

// function Login() {
    
//     // setFormData to empty email and password fields 
//     const [formData, setFormData] = useState({
//             email: '', 
//             password: '',
//     })
  
//     const { email, password } = formData

//     const navigate = useNavigate()
//     const dispatch = useDispatch()

//     const { user, isLoading, isError, isSuccess, message } = useSelector(
//         // react-redux gets state from global 'auth' state   
//         (state) => state.auth)

//     useEffect(() => {
//         if(isError) {
//             toast.error(message)
//         }

//         // ifSuccess or user is logged in 
//         if(isSuccess || user){
//             navigate('/')
//         }

//         dispatch(reset())

//         }, [user, isError, isSuccess, message, navigate, dispatch])

//     const onChange = (e) => {
//         setFormData((prevState) => ({
//             ...prevState,
//             [e.target.name]: e.target.value,
//         }))
//     }

//     const onSubmit = (e) => {
//         e.preventDefault()

//         const userData = {
//             email, password,
//         }

//         console.log(userData)
//         dispatch(login(userData))
//     }

//     if(isLoading) {
//         return <Spinner />
//     }

//     return (
//         <>
//             <section className='pr-10 mb-5'>
//                 <h1>Login and start using JointSpaces.</h1>
//             </section>
        
//             <section>
//                 <form className={formClassName} onSubmit={onSubmit}>
//                     <input 
//                         type="text" 
//                         className={inputClassName}
//                         id="email" 
//                         name="email" 
//                         value={email} 
//                         placeholder="Enter your email" 
//                         onChange={onChange}
//                     />
//                     <input 
//                         type="password" 
//                         className={inputClassName}
//                         id="password" 
//                         name="password" 
//                         value={password} 
//                         placeholder="Enter password" 
//                         onChange={onChange}
//                     />
//                     <button className='bg-pinky rounded-lg p-5 mb-5' type="submit"><h2>Login</h2></button>
//                 </form>
//             </section>

//             <section>
//                 <h3 className='text-center'><Link className='underline' to='/register'>I don't have an account</Link></h3>
//             </section>
//         </>
//     )
// }

// export default Login