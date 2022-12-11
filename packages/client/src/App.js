import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration'
import Templates from './pages/Templates'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Staff from './pages/Staff'

import Footer from './components/Footer'
import NavBar from './components/NavBar'
import StaffPage from './pages/StaffPage';
import RegistrationPage from './pages/RegistrationPage';
import TemplatesPage from './pages/TemplatesPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    
  
    <Router>

      <NavBar />
      
      <Routes>

          <Route path="/" element= { <HomePage /> } />
          <Route path="/staff" element= { <StaffPage /> } />
          <Route path="/register" element={ <RegistrationPage /> } />
          <Route path='/ideas' element={ <TemplatesPage /> } />
          <Route path='/dashboard' element={ <Dashboard /> } />
          <Route path='/login' element={ <LoginPage /> } />

      </Routes>
      

      <Footer/>


    </Router>

  );
}

export default App;


/*    <div className="App mt-20">

      <div>

        <h1 className="text-4xl font-bold">  TPD DEVELOPERS  </h1>

        <HomePage />

      </div>

    </div>
    
    
*/