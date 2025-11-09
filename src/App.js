import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import IndividualTherapy from './pages/IndividualTherapy';
import ParentGuidance from './pages/ParentGuidance';
import Contact from './pages/Contact';
import Clinic from './pages/Clinic';
import Lectures from './pages/lectures';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/IndividualTherapy" element={<IndividualTherapy />} />
          <Route path="/clinic" element={<Clinic />} />
          <Route path="/ParentGuidance" element={<ParentGuidance />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
