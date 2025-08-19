import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import IndividualTherapy from './pages/IndividualTherapy';
import ParentGuidance from './pages/parent-guidance';
import Contact from './pages/Contact';
import BodyMindTherapy from './pages/BodyMindTherapy';
import Clinic from './pages/Clinic';
import Lectures from './pages/lectures';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/body-mind-therapy" element={<BodyMindTherapy />} />
          <Route path="/Clinic" element={<Clinic />} />
          <Route path="/parent-guidance" element={<ParentGuidance />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
