# CoachLearn

A modern Learning Management System designed for coaching institutes to manage students, teachers, courses, study materials, assignments, quizzes, attendance, and academic activities through one organized platform.

## Overview

**CoachLearn** is a role-based coaching institute LMS built with React and TypeScript. The platform provides different experiences for students, teachers, administrators, and super administrators.

The current version focuses on a clean, responsive frontend with realistic mock data and complete navigation between the major modules. It is structured so that backend APIs, authentication, database integration, and file storage can be connected later without redesigning the application.

## ✨ What CoachLearn Offers

### Student

* Personalized dashboard
* Course browsing and course details
* Study materials
* Assignments and submission tracking
* Quizzes and quiz results
* Attendance tracking
* Academic calendar
* Teacher profiles
* Notifications
* Editable profile

### Teacher

* Teacher dashboard
* Student management
* Course management
* Assignment management
* Quiz management
* Attendance overview
* Calendar
* Student performance tracking

### Admin

* Student management
* Teacher management
* Subject and course management
* Assignment and quiz management
* Attendance monitoring
* Platform activity overview

### Super Admin

* Platform-level dashboard
* Overall student and teacher statistics
* Course and subject overview
* Platform activity
* System health monitoring
* Administrative quick actions

## 🛠️ Tech Stack

| Technology    | Purpose                          |
| ------------- | -------------------------------- |
| React         | Frontend UI                      |
| TypeScript    | Type-safe development            |
| Vite          | Development and production build |
| Tailwind CSS  | Responsive styling               |
| React Router  | Application routing              |
| Lucide React  | UI icons                         |
| Local Storage | Demo role/session persistence    |

##  Project Structure

```text
CoachingApplication/
├── public/
├── src/
│   ├── components/
│   │   ├── AppLayout.tsx
│   │   ├── Header.tsx
│   │   └── Sidebar.tsx
│   ├── pages/
│   │   ├── Dashboard.tsx
│   │   ├── StudentCourses.tsx
│   │   ├── Students.tsx
│   │   ├── StudentDetail.tsx
│   │   ├── Teachers.tsx
│   │   ├── TeacherDetails.tsx
│   │   ├── Subjects.tsx
│   │   ├── SubjectDetails.tsx
│   │   ├── Courses.tsx
│   │   ├── CourseDetails.tsx
│   │   ├── StudyMaterial.tsx
│   │   ├── Assignments.tsx
│   │   ├── Quizzes.tsx
│   │   ├── QuizDetails.tsx
│   │   ├── QuizResult.tsx
│   │   ├── Attendance.tsx
│   │   ├── Calendar.tsx
│   │   ├── Notifications.tsx
│   │   ├── Profile.tsx
│   │   ├── VideoLibrary.tsx
│   │   └── ...
│   ├── App.tsx
│   ├── Auth.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
└── README.md
```

##  Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project

```bash
cd CoachingApplication
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will be available through the local URL shown in the terminal.

##  Production Build

Create an optimized production build with:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

##  Code Quality

Run the project linter with:

```bash
npm run lint
```

The current project passes the lint check with warnings only and no lint errors.

##  Demo Role Access

The application includes role-based navigation for demonstration purposes.

Available roles:

* Student
* Teacher
* Admin
* Super Admin

The selected role determines the dashboard and accessible navigation areas.

> Authentication and authorization are currently implemented as frontend demo flows. Production authentication should be connected to a secure backend service.

##  Responsive Design

CoachLearn is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

The navigation, cards, tables, dashboards, forms, and management screens adapt to smaller screen sizes.

## Project Links

* **Live Demo:** [Add deployed Vercel link]
* **GitHub Repository:** [Add GitHub repository link]
* **Project Documentation:** [Add documentation link if available]

##  Deployment

The application can be deployed easily using platforms such as Vercel or Netlify.

For Vercel:

```text
Framework: Vite
Build Command: npm run build
Output Directory: dist
```

##  Future Scope

The frontend architecture is prepared for further development. Planned integrations can include:

* Backend REST APIs
* Secure authentication
* Database integration
* Real-time notifications
* Cloud file storage
* Online assignment submission
* Video streaming
* Payment integration
* Advanced analytics
* Automated student performance reports
* Email and notification services

##  Project

**CoachLearn — Coaching Institute Learning Management System**

Built as a modern, responsive LMS frontend with a focus on usability, role-based workflows, and a scalable application structure.
