import React, { useState } from 'react';
import axios from 'axios';

export default function BookingPage({ vehicleId }) {
  const [date, setDate] = useState('');
  const [testDrive, setTestDrive] = useState(false);

  const handleBook = async () => {
    await axios.post('/api/bookings/', {
      vehicle: vehicleId,
      date,
      test_drive: testDrive
    }, {
      headers: { Authorization: `Bearer ${localStorage.getItem('access')}` }
    });
    alert('Booked successfully');
  };

  return (
    <div>
      <input type='date' onChange={(e) => setDate(e.target.value)} />
      <label><input type='checkbox' onChange={() => setTestDrive(!testDrive)} /> Test Drive</label>
      <button onClick={handleBook}>Book</button>
    </div>
  );
}
