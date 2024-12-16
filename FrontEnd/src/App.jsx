import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Courses from './components/courses/Courses';

function App() {
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
