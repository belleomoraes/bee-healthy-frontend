import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Vaccination from './components/Dashboard/Pages/Vaccination';
import Exams from './components/Dashboard/Pages/Exams';
import Profile from './components/Dashboard/Pages/Profile';
import Measurement from './components/Dashboard/Pages/Measurements';
import Medicine from './components/Dashboard/Pages/Medicine';
import LogOut from './components/Dashboard/Pages/LogOut';
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
            <Route path="vaccination" element={<Vaccination />} />
            <Route path="exams" element={<Exams />} />
            <Route path="medicine" element={<Medicine />} />
            <Route path="measurements" element={<Measurement />} />
            <Route path="logout" element={<LogOut />} />
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