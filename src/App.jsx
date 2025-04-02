import './App.css';
import LoginPage from './pages/Loginpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Interface from './pages/Inter';
import RegisterForm from './pages/Registerpage';
import AdminPanel from './pages/Adminpage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/interface" element={<Interface />} />
        <Route path="/ad" element={<AdminPanel />} />
        <Route path="/r" element={<RegisterForm />} />
        <Route path="*" element={<h1>ERORR 404 / wali</h1>} />
      </Routes>
    </Router>
  );
}

export default App;