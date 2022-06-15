function NoAccess() {
  return ( <>   
      <section>
          <h1 className='mb-5 align-center'>Access Denied...</h1>
          <h3 className='text-center'><a className="underline transition duration-150 ease-in-out" data-bs-toggle="offcanvas" href="#offcanvasRight" role="button" aria-controls="offcanvasRight">What can I access?</a></h3>
      </section>
    </>
  )
}

export default NoAccess