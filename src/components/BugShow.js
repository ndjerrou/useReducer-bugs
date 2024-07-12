import React from 'react';

function BugShow({ title, isResolved, onResolveBug, id, onDeleteBug }) {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <button onClick={() => onDeleteBug(id)}>X</button>
      <h5>{title}</h5>
      {'  '}
      <input
        type='checkbox'
        checked={isResolved}
        onChange={() => onResolveBug(id)}
      />
    </div>
  );
}

export default BugShow;
