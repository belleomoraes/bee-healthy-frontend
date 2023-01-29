import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Calendar from './components/Dashboard/Pages/Calendar';
import History from './components/Dashboard/Pages/History';
import Profile from './components/Dashboard/Pages/Profile';
import Exam from './components/Dashboard/Pages/Exam';
import Settings from './components/Dashboard/Pages/Settings';
import GlobalStyle from './assets/styles/GlobalStyle';

export default function App() {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
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
