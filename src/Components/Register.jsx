import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import useLocalStorage from '../hooks/useLocalStorage';

const Registrations = () => {
  const [offerings] = useLocalStorage('offerings', []);
  const [registrations, setRegistrations] = useLocalStorage('registrations', []);
  const [students, setStudents] = useState('');
  const [offeringId, setOfferingId] = useState('');
  const [courseTypes] = useLocalStorage('courseTypes', []);
  const [courses] = useLocalStorage('courses', []);

  const registerStudent = () => {
    if (students && offeringId) {
      setRegistrations([...registrations, {
        id: uuidv4(),
        name: students,
        offeringId
      }]);
      setStudents('');
    }
  };

  return (
    <div className="component-container">
      <h2>Student Registrations</h2>
      <div className="input-group">
      <input value={students} onChange={(e) => setStudents(e.target.value)} placeholder="Student Name" />
      <select value={offeringId} onChange={(e) => setOfferingId(e.target.value)}>
        <option value=''>Select Offering</option>
        {offerings.map(o => (
          <option key={o.id} value={o.id}>
            {courseTypes.find(ct => ct.id === o.courseTypeId)?.name} - {courses.find(c => c.id === o.courseId)?.name}
          </option>
        ))}
      </select>
      <button onClick={registerStudent}>Register</button>
      </div>
      <ul>
        {registrations.map(r => {
          const offering = offerings.find(o => o.id === r.offeringId);
          return (
            <li key={r.id}>
              {r.name} ({courseTypes.find(ct => ct.id === offering?.courseTypeId)?.name} - {courses.find(c => c.id === offering?.courseId)?.name})
            </li>
          );
        })}
      </ul>
      
    </div>
  );
};

export default Registrations;
