import React, { useState } from 'react';

function BugAdd({ onAddBug }) {
  const [title, setTitle] = useState('');
  return (
    <div>
      <h5>Add a bug</h5>
      <label>Title</label>
      <input value={title} onChange={e => setTitle(e.target.value)} />
      <button onClick={() => onAddBug(title)}>Add a bug</button>
    </div>
  );
}

export default BugAdd;
