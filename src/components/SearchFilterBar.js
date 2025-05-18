import React, { useState } from 'react';

export default function SearchFilterBar({ onSearch }) {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  return (
    <div>
      <input placeholder='Make' onChange={(e) => setMake(e.target.value)} />
      <input placeholder='Model' onChange={(e) => setModel(e.target.value)} />
      <button onClick={() => onSearch({ make, model })}>Search</button>
    </div>
  );
}