# MERN Workout Tracker

A simple MERN stack project for tracking workouts. Users can create, update, and delete workouts with information about the workout's name, load, and reps. This project demonstrates how to build a full-stack web application using MongoDB, Express.js, React, and Node.js.

---

## Features

- Create a new workout with name, load (weight), and reps (repetitions).
- Edit existing workouts.
- Delete workouts.
- Full-stack implementation with React frontend and Node/Express backend.

---

## Technologies Used

**Frontend:**  
- React  

**Backend:**  
- Node.js  
- Express.js

**Database:**  
- MongoDB (with Mongoose)

**State Management:**  
- React Hooks

---

## Project Setup

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-name>
2. Install Dependencies
Backend (Server)
Navigate to the server directory and install the necessary dependencies:

bash
Copy code
cd server
npm install
Frontend (Client)
Navigate to the client directory and install the necessary dependencies:

bash
Copy code
cd client
npm install
3. Configure Environment Variables
In the server directory, create a .env file to store your environment variables such as your MongoDB connection string.

Example:

bash
Copy code
MONGODB_URI=mongodb://localhost:27017/workout-tracker
PORT=5000
4. Running the Project
Backend
To start the backend server, navigate to the server directory and run:

bash
Copy code
npm run dev
Frontend
To start the frontend React application, navigate to the client directory and run:

bash
Copy code
npm start
This will run the app on http://localhost:3000.

Now, your full-stack workout tracker should be up and running! The backend will be accessible at http://localhost:5000.

css
Copy code

This formatting organizes the content clearly with headings, bullet points, code blocks, and links for better readability.
