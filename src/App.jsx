import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './public/vite.svg';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  console.log("App Loaded"); // Check if the component renders
  return (
    <>
      <h1>App Loaded</h1> {/* This will confirm if the component is rendering */}
      <Outlet />
    </>
  );
}


export default App
