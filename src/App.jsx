import './App.css';
import LoginPage from './pages/Loginpage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="*" element={<h1>ERORR 404 / wali</h1>} />
      </Routes>
    </Router>
  );
}

export default App;