import React from 'react';
import './App.css';

function App() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-64 h-48 bg-green-500 rounded-tl-lg rounded-tr-lg"></div>
      <div className="w-64 h-48 bg-white rounded-bl-lg rounded-br-lg flex justify-center items-center">
        <div className="w-24 h-24 bg-white rounded-full"></div>
        <div className="w-24 h-24 bg-green-500 rounded-full"></div>
      </div>
    </div>
  );
}

export default App;