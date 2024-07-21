// src/app/page.js

"use client"

import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [rollNumber, setRollNumber] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name,
      rollNumber,
    };

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setResponseMessage(result.message || result.error);
    } catch (error) {
      setResponseMessage('Error submitting form');
    }
  };

  return (
    <div>
      <h1>Form Submission</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="rollNumber">Roll Number:</label>
          <input
            type="text"
            id="rollNumber"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
}
