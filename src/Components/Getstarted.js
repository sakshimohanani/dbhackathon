import React, { useEffect } from 'react';
import './card.css';
import audio1 from '../assets/mp4.mp3';

const Card = () => {
  useEffect(() => {
    const audio = new Audio(audio1);
    const playPromise = audio.play();
    
    // Handle play promise to catch errors
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        // Playback started
      }).catch(error => {
        console.error('Audio playback error:', error);
      });
    }
  
    // Clean up function to stop the audio when the component unmounts
    return () => {
      audio.pause();
      audio.currentTime = 0; // Reset audio to start position
    };
  }, []);

  return (
    <div>
      <article className='mt-10 p-9'>
        <section className="card" style={{ backgroundColor: '#E7F3FF' }}>
          <div className="text-content">
            <h3>Assign Tasks</h3>
            <p>Delegate tasks efficiently to ensure patient care is seamless.</p>
            <a href="/assign-tasks">Assign Tasks</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXNzaWduJTIwdGFza3xlbnwwfHwwfHx8MA%3D%3D" alt="Assign Tasks" />
          </div>
        </section>
        <section className="card" style={{ backgroundColor: '#E7F3FF' }}>
          <div className="text-content">
            <h3>Patient Location</h3>
            <p>Track patient locations in real-time to enhance safety and care.</p>
            <a href="/patient-location">Patient Location</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bG9jYXRpb258ZW58MHx8MHx8fDA%3D" alt="Patient Location" />
          </div>
        </section>
        <section className="card" style={{ backgroundColor: '#E7F3FF' }}>
          <div className="text-content">
            <h3>Patient Details</h3>
            <p>Access comprehensive patient details for better care management.</p>
            <a href="/patientPage">Patient Details</a>
          </div>
          <div className="visual">
            <img src="https://images.unsplash.com/photo-1550831107-1553da8c8464?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV0YWlsc3xlbnwwfHwwfHx8MA%3D%3D" alt="Patient Details" />
          </div>
        </section>
      </article>
    </div>
  );
};

export default Card;
