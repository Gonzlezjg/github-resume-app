import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  return (
    <>
      <button
        onClick={async () => {
          const res = await fetch('/api');
          const data = await res.json()
          console.log(data)
        }}
      >
        click
      </button>
    </>
  );
}

export default App;
