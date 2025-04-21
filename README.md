# Learning Management System (LMS)

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)](https://jwt.io/)

> 🎓 A modern Learning Management System built with the MERN stack, featuring separate Admin and Learner dashboards, comprehensive course management, and interactive learning experiences.

### Key Features
- 👨‍💼 Comprehensive Admin Dashboard
- 👨‍🎓 Interactive Learner Interface
- 📚 Rich Course Management
- 📊 Progress Analytics
- 🔐 Secure Authentication

## 🌟 Overview

This LMS is a full-featured educational platform that enables efficient management of online learning programs. It provides separate interfaces for administrators and learners, with a robust backend supporting all operations.

## 🏗️ System Architecture

![LMS System Architecture](./Architecture-Diagram.png)

The system architecture follows a modern, scalable design with the following key components:

### Frontend Layer
- **Admin Dashboard**: Manages courses, content, assessments, users, and analytics
- **Learner Dashboard**: Provides course access, learning interface, and progress tracking

### Backend Layer
- **API Layer**: RESTful endpoints for content delivery, course management, and user operations
- **Business Logic Layer**: Core services handling course management, content, assessments, and users
- **Security Layer**: Implements JWT authentication, data encryption, and access control

### External Services
- Authentication Service
- File Storage System
- Email Service

### Database Layer
- MongoDB collections for users, courses, materials, assessments, and enrollments

### Security Features
- JWT Authentication
- Role-Based Access Control
- Data Encryption
- Secure File Upload
- Input Validation

## 🚀 Features

### 👨‍💼 Admin Dashboard

#### Course Management
- Create and manage course content
- Upload and organize learning materials
- Design and schedule assessments
- Monitor student progress
- Generate performance reports
- Manage student enrollments

#### Content Management
- Support multiple content formats:
  - Video lectures
  - PDF documents
  - Presentations
  - Interactive quizzes
- Organize content by modules
- Track content engagement

#### Assessment Tools
- Create various question types
- Set up automated grading
- Schedule assessments
- Review submission analytics
- Provide feedback

### 👨‍🎓 Learner Dashboard

#### Learning Experience
- Access course materials
- Take assessments and quizzes
- Track personal progress
- View performance analytics
- Download course certificates
- Engage with course content

#### User Features
- Personal profile management
- Course enrollment
- Progress tracking
- Performance history
- Certificate management

### 🔧 Technical Features

#### Backend Architecture
- RESTful API design
- Secure authentication system
- File handling capabilities
- Data validation
- Performance optimization

#### Security Implementation
- JWT authentication
- Protected routes
- Secure file uploads
- Data encryption
- Input sanitization

## 💻 Technology Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT for authentication

### Frontend
- React.js
- Modern UI libraries
- Responsive design
- Interactive components

### Development Tools
- ESLint for code quality
- Prettier for formatting
- Git for version control
- Environment configurations

## 🛠️ Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install Backend dependencies
```bash
cd Back_End
npm install
```

3. Install Admin Dashboard dependencies
```bash
cd Admin
npm install
```

4. Install Learner Dashboard dependencies
```bash
cd BrilliantProClone-Learner
npm install
```

5. Configure environment variables
- Create `.env` files in each directory
- Set up necessary environment variables

## 🚀 Running the Application

### Backend Server
```bash
cd Back_End
npm start
```

### Admin Dashboard
```bash
cd Admin
npm start
```

### Learner Dashboard
```bash
cd BrilliantProClone-Learner
npm start
```

## 📁 Project Structure

```
Learning-Management-System--LMS-/
├── Back_End/               # Backend server
│   ├── config/            # Configuration files
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── uploads/           # File storage
│   └── index.js          # Server entry point
│
├── Admin/                 # Admin dashboard
│   ├── public/           # Static files
│   └── src/              # Source files
│
└── BrilliantProClone-Learner/  # Learner dashboard
    ├── public/           # Static files
    └── src/              # Source files
```

## 🔐 Environment Variables

The following environment variables are required:

```env
# Backend
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
PORT=backend_port

# Frontend (Admin & Learner)
REACT_APP_API_URL=backend_api_url
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- [Your Name] - *Initial work*

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape this LMS
- Inspired by modern educational needs
- Built with best practices in mind 