# Campus Collaborate: A MERN Stack Project

## Description
Campus Collaborate is a web application aimed at enhancing the educational experience by providing a platform for students to collaborate, showcase their projects, and connect with peers. It facilitates sharing knowledge, receiving feedback, and exploring new opportunities in academia.

## Tech Stack Used
- **MongoDB:** NoSQL database for storing user data and project information.
- **Express.js:** Backend web application framework running on Node.js.
- **React:** Frontend library for building the user interface.
- **Node.js:** JavaScript runtime environment for executing server-side JavaScript code.

## User Research
User research was conducted to understand the needs and challenges faced by students in collaborating and sharing their academic projects. Insights gathered from surveys and interviews helped in shaping the features and functionalities of Campus Collaborate.

## Future Updates
Planned updates include:
- Enhanced AI-driven spam detection.
- Real-time collaboration tools.
- Integration with educational resources and APIs.
- Mobile app enhancements for better user engagement.

## Different Pages
- **Project Showcase:** Detailed view of projects with multimedia support.
- **Profile Page:** Where students can showcase their skills and projects.
- **Chatroom:** Chat with other studentts on collaborated projects.
- **Course Review Page:** For sharing and reading course reviews.
- **Doubts Page:** A platform for asking for help and sharing knowledge.

## Features
- Multimedia support for project showcasing.
- Rating and feedback system for projects.
- Ask-for-help functionality.
- Course review system.
- Anti-spam engine to maintain a clean environment.

## User Interface
The user interface is designed to be intuitive and user-friendly, emphasizing ease of navigation and accessibility. It includes responsive design for compatibility with various devices and screen sizes.

## Installation and Setup

1. **Prerequisites:**
   - Node.js and npm installed.
   - MongoDB set up either locally or in the cloud.

2. **Clone the Repository:**
   ```sh
   git clone https://github.com/Nikhil-IITG/kritiDev.git
   cd kritiDev
   ```

3. **Backend Setup:**
   - Navigate to the backend directory.
   - Install dependencies:
     ```sh
     cd backend
     npm install
     ```
   - Start the server:
     ```sh
     npm start
     ```

4. **Frontend Setup:**
   - Navigate to the frontend directory.
   - Install dependencies:
     ```sh
     cd frontend
     npm install
     ```
   - Start the React app:
     ```sh
     npm start
     ```
   - The application should now be running on `http://localhost:5500`.

5. **Environment Variables:**
   Make a file named .env in the main folder, it's content should be:
   ```sh
    MONGO_URI = "Your MongoDB URI"
    CALLBACK_URL = "http://localhost:5500/auth/microsoft/redirect"
    CLIENT_ID = "Your Microsoft Client ID"
    CLIENT_SECRET = "Your Microsoft Client Secret"
    ```

## Deployed Link
[Campus Collaborate Live](#) - A placeholder link for the deployed application.

## Video Demonstration
A video walkthrough of the application showcasing its features, user interface, and how to use it effectively.