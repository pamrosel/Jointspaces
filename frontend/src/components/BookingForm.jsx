import { useDispatch } from 'react-redux'
import { createBooking } from '../features/bookings/bookingSlice'
import { useParams } from "react-router-dom";
import { useFormik } from 'formik'
import * as Yup from 'yup'

const formClassName = "container mx-auto grid md:grid-cols-2 gap-1"
const inputClassName = "rounded-lg p-3 bg-slate-50 mb-5 focus:outline-none focus:bg-white"
const errorClassName = "text-red md:col-span-2 pl-2.5"


const BookingForm = () => {

    // pass through spaceid params 
    const { bookingfromspaceid } = useParams();
    // declare dispatch from react-redux 
    const dispatch = useDispatch()

    // reset fields using initialValues object from formik
    const formik = useFormik({
        initialValues: {
            bookingstart: "",
            bookingend: "",
            spaceid: ""
        },

        validationSchema: Yup.object({
            bookingstart: Yup.date()
                .required('is required'),
            bookingend: Yup.date()
                .required('is required'),
            spaceid: Yup.string()
                .required('is required')
        }),

        onSubmit: values => {
            // use dispatch to post to createBooking
            dispatch(createBooking(values))
        },
    })

    return (
        <section>
            <form className={formClassName} onSubmit={formik.handleSubmit}>
                <label htmlFor="bookingstart">Booking Start 
                {formik.touched.bookingstart && formik.errors.bookingstart ? (
                    <span className={errorClassName}>{formik.errors.bookingstart}</span>
                ) : null}
                </label>
                <input 
                    type="datetime-local" 
                    className={inputClassName}
                    name="bookingstart" 
                    id="bookingstart"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bookingstart}
                />
                
                <label htmlFor="bookingend">Booking End
                {formik.touched.bookingend && formik.errors.bookingend ? (
                    <span className={errorClassName}>{formik.errors.bookingend}</span>
                ) : null}
                </label>
                <input 
                    type="datetime-local" 
                    className={inputClassName}
                    name="bookingend" 
                    id="bookingend" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.bookingend}
                />

                <label htmlFor="spaceid">Space id
                {formik.touched.spaceid && formik.errors.spaceid ? (
                    <span className={errorClassName}>{formik.errors.spaceid}</span>
                ) : null}
                </label>
                <input 
                    type="text" 
                    className={inputClassName}
                    name="spaceid" 
                    id="spaceid" 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.spaceid}
                />

                <button className='bg-greeny rounded-lg p-5 mb-5' type="submit"><h2>Make a Booking</h2></button>
            </form>
        </section>
    )
}

export default BookingForm











