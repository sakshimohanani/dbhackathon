import React from 'react';
import './Patientpage.css';

const PatientPage = () => {
  const patient = {
    name: "John Doe",
    age: 75,
    gender: "Male",
    contact: "123-456-7890"
  };

  const history = [
    { date: "2023-01-01", details: "Diagnosed with early-stage dementia." },
    { date: "2023-06-15", details: "Prescribed medication for memory loss." },
    { date: "2024-02-10", details: "Experienced mild cognitive impairment." }
  ];

  return (
    <div className="patient-page">
      <div className="card">
        <h2>Patient Details</h2>
        <p><strong>Name:</strong> {patient.name}</p>
        <p><strong>Age:</strong> {patient.age}</p>
        <p><strong>Gender:</strong> {patient.gender}</p>
        <p><strong>Contact:</strong> {patient.contact}</p>
      </div>

      <div className="card">
        <h2>Medical History (Dementia)</h2>
        {history.length > 0 ? (
          <ul>
            {history.map((record, index) => (
              <li key={index}>
                <p><strong>Date:</strong> {record.date}</p>
                <p><strong>Details:</strong> {record.details}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No medical history available.</p>
        )}
      </div>
    </div>
  );
};

export default PatientPage;
