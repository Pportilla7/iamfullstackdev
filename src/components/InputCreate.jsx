// En InputCreate.jsx
import React, { useState } from 'react';

function InputCreate({ urlApi }) {
  const [title, setTitle] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { title };
    const response = await fetch(`${urlApi}/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (response.ok) {
      setTitle('');
      alert('Task added successfully');
    } else {
      alert('Failed to add task');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
        required
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default InputCreate;
