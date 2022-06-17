import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FaQuestionCircle } from 'react-icons/fa'

function SingleSpace() {
    const { spaceid } = useParams();

    const [space, SetSpace] = useState([]);
    useEffect(() => {
        const fetch = async () => {
            try {
                const { data } = await axios.get(`/api/spacebookings/${spaceid}`)
                SetSpace(data)
            } catch (err) {
                console.error(err)
            }
        };
        fetch();
    }, [spaceid]);
    
    return (
          <article>

            <img className='rounded-t-lg' src={space.spaceimage} alt={space.spacename}/>
            <div className='bg-white rounded-b-lg p-4 mb-6 text-plum'>
              <h1>{space.spacename}</h1>
              <h3>{space.address}, {space.suburb}</h3>            
            </div>
            
            <div className="accordion accordion-flush text-plum" id="accordionFlushExample">
              <div className="accordion-item border-l-0 border-r-0 border-t-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingOne">
                  <button 
                    className="accordion-button relative flex items-center w-full py-4 px-5 bg-white border-0 rounded-none transition" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    About this Space
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse border-0 collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body py-4 px-5">
                    <p>{space.description}</p>
                  </div>
                </div>
              </div>
            
              <div className="accordion-item border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingTwo">
                  <button 
                    className="collapsed accordion-button relative flex items-center w-full py-4 px-5 bg-white border-0 rounded-none transition" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false" aria-controls="flush-collapseTwo">
                    Rules
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse border-0 collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body py-4 px-5">
                    <p>{space.rules}</p>
                  </div>
                </div>
              </div>

              <div className="collapsed accordion-item border-l-0 border-r-0 border-b-0 rounded-none bg-white border border-gray-200">
                <h2 className="accordion-header mb-0" id="flush-headingThree">
                  <button 
                    className="accordion-button collapsed relative flex items-center w-full py-4 px-5 bg-white border-0 rounded-none transition" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"
                    aria-expanded="false" aria-controls="flush-collapseOne">
                    Usage
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body py-4 px-5">
                    <h3>Bookings type: single</h3>
                    <h3>Capacity: 8</h3>
                    <details className='mt-5'>   
                      <summary>What does single or multi mean <FaQuestionCircle className='inline'/></summary>
                      <p><br/>Single<br/>
                      If this is a 'single' bookings space, it can be booked by one user at a time, even if that is on the behalf of a group.<br/><br/>
                      Multi<br/>
                      If this is a 'multi' bookings space, it can be booked by multiple users at any one time.
                      </p>
                    </details> 
                  </div>
                </div>
              </div>
            </div>

            <button className='bg-pinky rounded-lg p-5 mt-5 mb-5 w-full text-plum' type="submit">
              <Link to={`/bookings/${space._id}`}>
                <h2>Make a Booking</h2>
              </Link>
            </button>
            
          </article>
    );
}

export default SingleSpace;