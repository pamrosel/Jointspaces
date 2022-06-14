// // Function to overwrite the default error handler if no pre-determined
// // error status, reverting to a catch-all 500 error status 
const accessControl = (req, res, next) => {

   
        console.log('LOGGED')
        next()

      

//         // Define accessible routes for each user role 
//         const routes = {
//             'unauthorised': [
//                 '/style.css',
//                 '/login',
//                 '/register',
//             ], 
//             'admin' : [
//                 '/style.css',
//                 '/login',
//                 '/register',
//                 '/loggedout',
//                 '/admin',
//                 '/activitylog',
//                 '/createadmin',
//                 '/createuser',
//                 '/users',
//             ], 
//             'user' : [
//                 '/', 
//                 '/login',
//                 '/register',
//                 '/loggedout',
//                 '/space',
//                 '/space/:spaceid',
//                 '/bookings/:bookingfromspaceid',
//                 '/help',
//                 '/help/makeabooking',
//             ]
//         }
    
//         // Establish user role. First we assume the user is unauthorised
//         // then we check the session if the user exists, we get the 
//         // users role out of the session and store it for the next step
    
//         let user_role = "unauthorised"
//         let userobject
    
//         if (localStorage) {
//             userobject = JSON.parse(localStorage.getItem('user'))
//             user_role = userobject.role 
//         }
    
//         // Check if the user role has routes defined for it
//         if (user_role in routes) {
//             const allowed_routes = routes[user_role]
        
    
//             // Check if the requested url is a defined route for this user
//             if (allowed_routes.some(url => request.originalUrl.startsWith(url))) {
//                 // Allow the request to go through
//                 next()
//             } else {
//                 // Stop the request and respond with forbidden
//                 response.status(403).json('access forbidden')
//             }
    
//         } else {
//             // Stop the request and respond with not authenticated
//             response.status(401).json("clicent not authenticated")
//         }

// }
}

module.exports = {
    accessControl,
}
