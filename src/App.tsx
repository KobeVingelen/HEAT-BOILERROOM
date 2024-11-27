import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Program from './pages/Program';
import More from './pages/More';
import DJContest from './pages/DJContest';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/program" element={<Program />} />
            <Route path="/more" element={<More />} />
            <Route path="/dj-contest" element={<DJContest />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;