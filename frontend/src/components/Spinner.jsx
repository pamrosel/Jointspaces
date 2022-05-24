import React from 'react'

function Spinner() {
  return (
    <div className='flex items-center justify-center'>
      <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-teal-600" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner