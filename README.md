### [TaskFlow-App](https://task-flow-app-git-main-adarsh7123s-projects.vercel.app)


### Backend Repository: [nodejs_todoapp](https://github.com/adarsh7123/nodejs_todoapp)


#### TaskFlow Backend

This repository contains the backend for the TaskFlow application, built with Node.js, Express, and MongoDB Atlas. The backend provides a RESTful API for managing tasks, user authentication, and more.



#### Features

- **RESTful API:** Provides endpoints for managing tasks and user accounts.
- **Authentication:** User authentication with JWT (JSON Web Tokens).
- **Data Storage:** Uses MongoDB Atlas for cloud data storage.
- **CORS:** Cross-Origin Resource Sharing enabled for seamless frontend-backend communication.
- **Cookie Parsing:** Uses `cookie-parser` for handling cookies.

#### Getting Started

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/adarsh7123/nodejs_todoapp.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd nodejs_todoapp
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up Environment Variables:**

   Create a `.env` file in the root directory and add the following environment variables:

   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-uri
   JWT_SECRET=your-jwt-secret
   ```

5. **Run the Development Server:**

   ```bash
   npm start
   ```

   The API will be available at `http://localhost:5000`.

#### Deployment

The backend is deployed on Render.

#### API Endpoints

- **User Routes:**
  - `POST /api/users/register` - Register a new user.
  - `POST /api/users/login` - Log in an existing user.

- **Task Routes:**
  - `GET /api/tasks` - Get all tasks.
  - `POST /api/tasks` - Create a new task.
  - `PUT /api/tasks/:id` - Update a task.
  - `DELETE /api/tasks/:id` - Delete a task.

### Frontend Repository: [Repository](https://github.com/adarsh7123/TaskFlow-App)

#### Contributing

We welcome contributions! Please read our [contributing guidelines](CONTRIBUTING.md) to get started.

#### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to customize the URLs and any other details according to your specific project setup.



