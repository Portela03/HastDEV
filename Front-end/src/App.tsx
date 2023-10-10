import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from './routes/About/About';
import ContactUs from './routes/ContactUs/ContactUs';
import Footer from './Layout/Footer/Footer';
import Header from './Layout/Header/Header';
import Hero from './routes/Hero/Hero';
import Login from './routes/Login/Login';
import Project from './routes/Project/Project';
import Register from './routes/Register/Register';

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