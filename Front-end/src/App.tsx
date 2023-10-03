import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './layout/About/About';
import ContactUs from './layout/ContactUs/ContactUs';
import Footer from './layout/Footer/Footer';
import Header from './layout/Header/Header';
import Hero from './layout/Hero/Hero';
import Login from './layout/Login/Login';
import Project from './layout/Project/Project';
import Register from './layout/Register/Register';

function App() {

  return (
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App