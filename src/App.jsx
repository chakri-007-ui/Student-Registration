import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CourseTypes from './Components/CourseType';
import Courses from './Components/Course';
import Offerings from './Components/CourseOffers';
import Registrations from './Components/Register';
import Header from './Components/Header';
import './App.css';

function App() {
  return (
    
    <Router>
      <div className="container">
        <Header></Header>
        <div class="C1">
        <h1>🎓 Student Registration System</h1>
        
        <nav>
          <Link to="/course-types">Course Types</Link> |{' '}
          <Link to="/courses">Courses</Link> |{' '}
          <Link to="/offerings">Course Offerings</Link> |{' '}
          <Link to="/registrations">Registrations</Link>
        </nav>
        
        <Routes>
          <Route path="/course-types" element={<CourseTypes />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/offerings" element={<Offerings />} />
          <Route path="/registrations" element={<Registrations />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;