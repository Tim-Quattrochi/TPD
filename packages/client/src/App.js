import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Dashboard from './pages/Dashboard';
import Footer from './components/Footer';
import NavBarComp from './components/NavBar';
import StaffPage from './pages/StaffPage';
import RegistrationPage from './pages/RegistrationPage';
import TemplatesPage from './pages/TemplatesPage';
import LoginPage from './pages/LoginPage';
import Users from './components/Users';
import AllTasks from './pages/AllTasks';



function App() {

  
  return (
    <Router>

      <NavBarComp />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/staff" element={<StaffPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/ideas" element={<TemplatesPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/tasks" element={<AllTasks />} />



      </Routes>

      <Footer />

    </Router>
  );
}

export default App;


