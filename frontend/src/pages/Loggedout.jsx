import React from 'react'
import { Link } from 'react-router-dom'

function Loggedout() {
  return ( <>   
      <section>
          <h1 className='mb-5'>You've logged out. Enjoy the rest of your day.</h1>
          <h3 className='text-center'><Link className='underline' to='/login'>Go back to login</Link></h3>
      </section>
    </>
  )
}

export default Loggedout