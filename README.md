# Edemy - Course Selling Website

A comprehensive full-stack web application for online course selling, built with React and Node.js. The platform provides separate dashboards for students and educators, enabling seamless course creation, enrollment, and learning experiences.

## Features

### For Students
- **Course Browsing**: Explore a wide range of courses with detailed descriptions and ratings
- **Course Enrollment**: Purchase and enroll in courses using Stripe payment integration
- **Video Playback**: Watch course videos with a built-in player
- **Progress Tracking**: Monitor learning progress through interactive course progress tracking
- **My Enrollments**: View and manage enrolled courses
- **Course Ratings**: Rate and review completed courses

### For Educators
- **Course Creation**: Add new courses with rich text descriptions, images, and video content
- **Course Management**: Edit and manage existing courses
- **Dashboard Analytics**: View earnings, enrolled students, and course performance metrics
- **Student Management**: Access detailed information about enrolled students
- **Role Management**: Seamless transition to educator role

### General Features
- **User Authentication**: Secure authentication using Clerk
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Notifications**: Toast notifications for user actions
- **Media Management**: Cloudinary integration for image and video uploads
- **Payment Processing**: Secure payments via Stripe webhooks

## Tech Stack

### Frontend
- **React 19**: Modern JavaScript library for building user interfaces
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Declarative routing for React applications
- **Clerk**: Authentication and user management
- **Axios**: HTTP client for API requests
- **React Toastify**: Toast notifications
- **React YouTube**: YouTube video player integration
- **Quill**: Rich text editor for course descriptions
- **RC Progress**: Progress bars for course completion tracking

### Backend
- **Node.js**: JavaScript runtime for server-side development
- **Express.js**: Web application framework for Node.js
- **MongoDB**: NoSQL database for data storage
- **Mongoose**: ODM for MongoDB
- **Clerk**: Server-side authentication middleware
- **Stripe**: Payment processing and webhooks
- **Cloudinary**: Cloud-based media management
- **Multer**: Middleware for handling file uploads
- **Svix**: Webhook verification for Clerk

## Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **MongoDB** (local installation or cloud service like MongoDB Atlas)
- **Git** (for cloning the repository)

You'll also need accounts for the following services:
- **Clerk** (for authentication)
- **Stripe** (for payment processing)
- **Cloudinary** (for media storage)

## Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd course-selling-website-Edemy
   ```

2. **Install client dependencies:**
   ```bash
   cd client
   npm install
   ```

3. **Install server dependencies:**
   ```bash
   cd ../server
   npm install
   ```

## Environment Variables

Create a `.env` file in the `server` directory with the following variables:

```env
# Database
MONGODB_URI=your_mongodb_connection_string

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

# Stripe Payment
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# Cloudinary Media
CLOUDINARY_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Server Configuration
PORT=5000
FRONTEND_URL=http://localhost:5173
```

Create a `.env` file in the `client` directory:

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_BACKEND_URL=http://localhost:5000
```

## Usage

1. **Start the backend server:**
   ```bash
   cd server
   npm run server
   ```
   The server will start on port 5000 (or the port specified in your .env file).

2. **Start the frontend development server:**
   ```bash
   cd client
   npm run dev
   ```
   The client will be available at http://localhost:5173.

3. **Access the application:**
   - Open your browser and navigate to http://localhost:5173
   - Register/Login using Clerk authentication
   - Explore courses as a student or become an educator to create courses

## API Endpoints

### Course Routes (`/api/course`)
- `GET /api/course/all` - Get all available courses
- `GET /api/course/:id` - Get course details by ID

### Educator Routes (`/api/educator`)
- `GET /api/educator/update-role` - Update user role to educator
- `POST /api/educator/add-course` - Add a new course (requires authentication)
- `GET /api/educator/courses` - Get educator's courses (requires authentication)
- `GET /api/educator/dashboard` - Get educator dashboard data (requires authentication)
- `GET /api/educator/enrolled-students` - Get enrolled students data (requires authentication)

### User Routes (`/api/user`)
- `GET /api/user/data` - Get user data
- `GET /api/user/enrolled-courses` - Get user's enrolled courses
- `POST /api/user/purchase` - Purchase a course
- `POST /api/user/update-course-progress` - Update course progress
- `POST /api/user/get-course-progress` - Get course progress
- `POST /api/user/add-rating` - Add course rating

### Webhooks
- `POST /clerk` - Clerk webhook for user management
- `POST /stripe` - Stripe webhook for payment processing

## Project Structure

```
course-selling-website-Edemy/
├── client/                          # Frontend React application
│   ├── public/                      # Static assets
│   ├── src/
│   │   ├── assets/                  # Images, icons, and assets
│   │   ├── components/
│   │   │   ├── educator/            # Educator-specific components
│   │   │   └── student/             # Student-specific components
│   │   ├── context/                 # React context for state management
│   │   ├── pages/
│   │   │   ├── educator/            # Educator dashboard pages
│   │   │   └── student/             # Student-facing pages
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
├── server/                          # Backend Node.js application
│   ├── configs/                     # Configuration files
│   ├── controllers/                 # Route controllers
│   ├── middlewares/                 # Custom middlewares
│   ├── models/                      # MongoDB models
│   ├── routes/                      # API routes
│   ├── package.json
│   └── server.js                    # Main server file
├── .gitignore
└── README.md
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Support

For support or questions, please open an issue in the repository or contact the development team.

---

Built with ❤️ using React and Node.js
