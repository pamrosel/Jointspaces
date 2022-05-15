function SpaceItem({ space }) {
  
    return (
    <div className='space'>
        <img className='rounded-t-lg' src={space.spaceimage} alt={space.spacename}/>
        
        <article className='bg-white rounded-b-lg p-4 mb-6 text-plum'>
            <h2>{space.spacename}</h2>
            <h3>{space.suburb}</h3>
        </article>
        
    </div>
  )
}

export default SpaceItem