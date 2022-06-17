import { Link } from "react-router-dom";

function Help() {
    return (
        <>
            <section>
                <h1 className='mb-8'>What do you need help with?</h1>
            </section>
            <section>
                <button className='rounded-lg w-full p-4 mb-5 bg-orangey'>
                    <Link to={`/help/makeabooking`}>
                        <h2>How to: Make a Booking</h2>
                    </Link>
                </button>
            </section>
        </>
    
    )
}

export default Help