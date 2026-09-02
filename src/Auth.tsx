import { Navigate, Outlet } from 'react-router-dom'

export type UserRole =
  | 'student'
  | 'teacher'
  | 'admin'
  | 'super-admin'

export const allRoles: UserRole[] = [
  'student',
  'teacher',
  'admin',
  'super-admin',
]

export const managementRoles: UserRole[] = [
  'teacher',
  'admin',
  'super-admin',
]

export function setUserRole(role: UserRole) {
  localStorage.setItem('userRole', role)
}

export function getUserRole(): UserRole | null {
  const role = localStorage.getItem('userRole')

  if (
    role === 'student' ||
    role === 'teacher' ||
    role === 'admin' ||
    role === 'super-admin'
  ) {
    return role
  }

  return null
}

export function getDashboardPath(role: UserRole): string {
  switch (role) {
    case 'student':
      return '/dashboard'
    case 'teacher':
      return '/teacher-dashboard'
    case 'admin':
      return '/admin-dashboard'
    case 'super-admin':
      return '/super-admin-dashboard'
    default:
      return '/login'
  }
}

export function logout() {
  localStorage.removeItem('userRole')
  localStorage.removeItem('userName')
  localStorage.removeItem('userEmail')
}

type ProtectedRouteProps = {
  allowedRoles?: readonly UserRole[]
}

export function ProtectedRoute({
  allowedRoles,
}: ProtectedRouteProps) {
  const role = getUserRole()

  if (!role) {
    return <Navigate to="/login" replace />
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to={getDashboardPath(role)} replace />
  }

  return <Outlet />
}

export function RoleRedirect() {
  const role = getUserRole()

  if (!role) {
    return <Navigate to="/login" replace />
  }

  return <Navigate to={getDashboardPath(role)} replace />
}