import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';
import './Component.css';

const Offerings = () => {
  const [courseTypes] = useLocalStorage('courseTypes', []);
  const [courses] = useLocalStorage('courses', []);
  const [offerings, setOfferings] = useLocalStorage('offerings', []);
  const [courseTypeId, setCourseTypeId] = useState('');
  const [courseId, setCourseId] = useState('');

  const addOffering = () => {
    if (courseTypeId && courseId) {
      setOfferings([...offerings, {
        id: uuidv4(),
        courseTypeId,
        courseId
      }]);
    }
  };

  const deleteOffering = (id) => {
    setOfferings(offerings.filter(o => o.id !== id));
  };

  return (
  <div className="component-container">
    <h2>Course Offerings</h2>

    <div className="input-group">
      <select value={courseTypeId} onChange={(e) => setCourseTypeId(e.target.value)}>
        <option value=''>Select Course Type</option>
        {courseTypes.map(ct => (
          <option key={ct.id} value={ct.id}>{ct.name}</option>
        ))}
      </select>

      <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
        <option value=''>Select Course</option>
        {courses.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <button onClick={addOffering}>Add</button>
    </div>
    <ul>
      {offerings.map(o => (
        <li key={o.id}>
          {courseTypes.find(ct => ct.id === o.courseTypeId)?.name} - 
          {courses.find(c => c.id === o.courseId)?.name}
          <button onClick={() => deleteOffering(o.id)}>Delete</button>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default Offerings;
