import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContent from './components/MainContent';
import NextPage from './components/NextPage.jsx'; // Another page to navigate to

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-slate-900 w-full h-screen flex justify-center'>
        {/* Define Routes for different components */}
        <Routes>
          {/* Route for the MainContent component (the homepage or default page) */}
          <Route path="/" element={<MainContent />} />

          {/* Route for a different page (e.g., after clicking the Confession div) */}
          <Route path="/next-page" element={<NextPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
