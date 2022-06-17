Jointspaces Application
Creator: Pamela Rosel (472828250)
Year Created: 2022

---

APPLICATION DEPLOYMENT
This is a space sharing app, that allows users to make their own spaces available for sharing across trusted networks of friends, family and peers alike. 

To visit the deployed application on Heroku:
- https://jointspaces.herokuapp.com/

To demonstrate a 'user' login: 
- email: bog@gmail.com
- password: abc123

To demonstrate an 'admin' login: 
- email: superadmin@jointspaces.com 
- password: SuperAdminAbc123
* Please note: IP whitelisting will prevent random IP access

---

DEVELOPMENT STACK

This application is built on the MERN Stack. Documented below are all technologies used in this application, with recommended versions stated where applicable. 

Backend: 
- Express.js 
- Node.js 
- MongoDB Altas cloud database
- Mongoose 

Backend Dependencies: 
- "bcryptjs": "^2.4.3",
- "colors": "^1.4.0",
- "cors": "^2.8.5",
- "dotenv": "^16.0.0", 
- "express": "^4.17.3",
- "express-async-handler": "^1.2.0",
- "express-rate-limit": "^6.3.0",
- "jsonwebtoken": "^8.5.1",
- "mongoose": "^6.3.1"

Frontend: 
- React 
- Redux 

Frontend Dependencies: 
- "@reduxjs/toolkit": "^1.8.1",
- "@testing-library/jest-dom": "^5.16.4",
- "@testing-library/react": "^13.1.1",
- "@testing-library/user-event": "^14.1.1",
- "axios": "^0.27.2",
- "formik": "^2.2.9",
- "react": "^18.1.0",
- "react-dom": "^18.1.0",
- "react-hook-form": "^7.30.0",
- "react-icons": "^4.3.1",
- "react-redux": "^8.0.1", 
- "react-router-dom": "^6.3.0",
- "react-scripts": "5.0.1",
- "react-toastify": "^8.2.0",
- "serve": "^13.0.2",
- "tailwindcss": "^3.0.24",
- "tw-elements": "^1.0.0-alpha12",
- "web-vitals": "^2.1.4",
- "workbox-background-sync": "^6.5.3",
- "workbox-broadcast-update": "^6.5.3",
- "workbox-cacheable-response": "^6.5.3",
- "workbox-core": "^6.5.3",
- "workbox-expiration": "^6.5.3",
- "workbox-google-analytics": "^6.5.3",
- "workbox-navigation-preload": "^6.5.3",
- "workbox-precaching": "^6.5.3",
- "workbox-range-requests": "^6.5.3",
- "workbox-routing": "^6.5.3",
- "workbox-strategies": "^6.5.3",
- "workbox-streams": "^6.5.3",
- "yup": "^0.32.11"

---

LOCAL SETUP
Instructions 
1. Unzip folder 'mernjointspaces'
2. Open 'mernjointspaces' folder in vscode, with this as your root folder
3. Run `npm install` in the terminal to install backend dependencies in package.json
4. Re-configure .env development environment variables if necessary
        - PORT 5000
        - CORS_ORIGIN http://localhost:3000, http://localhost:5000
        - MONGO_URI can be accessed by any IP in development 
5. Navigate to the frontend folder `cd frontend`
6. Run `npm install` in the terminal to install frontend dependencies in package.json

To run the application locally in development 
- `npm run dev` runs backend and frontend concurrently on http://localhost:3000 (using a proxy to run the backend through http://localhost:5000)

