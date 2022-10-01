import React from 'react';

export default function app({ name }) {
  function click() {
    alert(name);
  }

  return (
    <div id="name" onClick={click()}>
      {name}
    </div>
  );
}
