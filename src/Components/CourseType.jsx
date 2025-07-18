import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const CourseTypes = () => {
  const [courseTypes, setCourseTypes] = useLocalStorage('courseTypes', []);
  const [name, setName] = useState('');

  const addCourseType = () => {
    if (name.trim()) {
      setCourseTypes([...courseTypes, { id: uuidv4(), name }]);
      setName('');
    }
  };

  const deleteCourseType = (id) => {
    setCourseTypes(courseTypes.filter(ct => ct.id !== id));
  };

  return (
    <div className="component-container">
      <h2>Course Types</h2>
      <div className="input-group">
      <input value={name} onChange={(e) => setName(e.target.value)} 
      placeholder="New Course Type" />
      <button onClick={addCourseType}>Add</button>
      </div>
      <ul>
        {courseTypes.map(ct => (
          <li key={ct.id}>
            {ct.name} <button onClick={() => deleteCourseType(ct.id)}>Delete</button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default CourseTypes;
