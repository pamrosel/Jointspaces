Jointspaces Application
Creator: Pamela Rosel (472828250)
Year Created: 2022

---


Application Description:
This is a space sharing app, that allows users to make their own spaces available for sharing across trusted networks of friends, family and peers alike. 

To visit the deployed application on Heroku:
- https://jointspaces.herokuapp.com/

To assist marking UX2 criteria please refer to application screenshot documentation: 
- UX2SupportingDocumentation.pdf 

---


Development Stack

Backend: 
- Express.js server
- MongoDB Altas cloud database

Frontend: 
- React framework

Third Party Dependencies: 
- Redux
- Axios 
- Tailwind CSS
- Tailwind Elements 
- Formik
- Yup 
- Workbox 

---


Local Setup 
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

---


User Login Credentials

For demonstrative purposes you can use the following: 
- email: pamrosel.is@gmail.com
- password: abc123