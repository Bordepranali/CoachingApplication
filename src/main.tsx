import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import {
  ProtectedRoute,
  RoleRedirect,
  allRoles,
  managementRoles,
} from './Auth'

import App from './App'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'

import Dashboard from './pages/Dashboard'
import StudentCourses from './pages/StudentCourses'

import AdminDashboard from './pages/AdminDashboard'

import Teachers from './pages/Teachers'
import TeacherDetails from './pages/TeacherDetails'

import Subjects from './pages/Subjects'
import SubjectDetails from './pages/SubjectDetails'

import Courses from './pages/Courses'
import CourseDetails from './pages/CourseDetails'

import StudyMaterial from './pages/StudyMaterial'
import Assignments from './pages/Assignments'

import Quizzes from './pages/Quizzes'
import QuizDetails from './pages/QuizDetails'
import QuizResult from './pages/QuizResult'

import Attendance from './pages/Attendance'
import Calendar from './pages/Calendar'
import Profile from './pages/Profile'
import Notifications from './pages/Notifications'

import CoachDashboard from './pages/CoachDashboard'
import Students from './pages/Students'
import StudentDetail from './pages/StudentDetail'
import VideoLibrary from './pages/VideoLibrary'

import SuperAdminDashboard from './pages/SuperAdminDashboard'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        <Route element={<ProtectedRoute allowedRoles={['student']} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/student-courses" element={<StudentCourses />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['teacher']} />}>
          <Route path="/teacher-dashboard" element={<CoachDashboard />} />
          <Route path="/coach-dashboard" element={<CoachDashboard />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Route>

        <Route
          element={
            <ProtectedRoute allowedRoles={['super-admin']} />
          }
        >
          <Route
            path="/super-admin-dashboard"
            element={<SuperAdminDashboard />}
          />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={managementRoles} />}>
          <Route path="/students" element={<Students />} />
          <Route path="/student/:id" element={<StudentDetail />} />
        </Route>

        <Route element={<ProtectedRoute allowedRoles={allRoles} />}>
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/teachers/:id" element={<TeacherDetails />} />

          <Route path="/subjects" element={<Subjects />} />
          <Route path="/subjects/:id" element={<SubjectDetails />} />

          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetails />} />

          <Route path="/study-material" element={<StudyMaterial />} />

          <Route path="/assignments" element={<Assignments />} />

          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quizzes/:id" element={<QuizDetails />} />
          <Route path="/quizzes/:id/result" element={<QuizResult />} />

          <Route path="/attendance" element={<Attendance />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/videos" element={<VideoLibrary />} />
        </Route>

        <Route path="*" element={<RoleRedirect />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)