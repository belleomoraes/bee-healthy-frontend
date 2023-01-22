import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendar from './pages/Dashboard/Calendar';
import History from './pages/Dashboard/History';
import Profile from './pages/Dashboard/Profile';
import Exam from './pages/Dashboard/Exam';
import Settings from './pages/Dashboard/Settings';

export default function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="exam" element={<Exam />} />
            <Route path="history" element={<History />} />
            <Route path="calendar" element={<Calendar />} />
            <Route path="settings" element={<Settings />} />
            <Route path="logout" element={<Settings />} />
            <Route index path="*" element={<Navigate to="/dashboard/profile" />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

// function ProtectedRouteGuard({ children }) {
//   // const token = useToken();

//   // if (!token) {
//   //   return <Navigate to="/sign-in" />;
//   // }

//   return <>{children}</>;
// }
