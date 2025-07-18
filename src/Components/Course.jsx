import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import './Component.css';

const Courses = () => {
  const [courses, setCourses] = useLocalStorage('courses', []);
  const [name, setName] = useState('');

  const addCourse = () => {
    if (name.trim()) {
      setCourses([...courses, { id: uuidv4(), name: name.trim() }]);
      setName('');
    }
  };

  const deleteCourse = (id) => {
    setCourses(courses.filter(course => course.id !== id));
  };

  return (
    <div className="component-container">
    <div className="course-container">
      <h2>Courses</h2>
      <div className="input-group">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="New Course (e.g., JAVA, DS)"
        />
        <button onClick={addCourse}>Add</button>
      </div>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            {course.name}
            <button onClick={() => deleteCourse(course.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Courses;
