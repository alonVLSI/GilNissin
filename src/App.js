import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import IndividualTherapy from './pages/IndividualTherapy';
import CouplesTherapy from './pages/CouplesTherapy';
import FamilyTherapy from './pages/FamilyTherapy';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/individual-therapy" element={<IndividualTherapy />} />
          <Route path="/couples-therapy" element={<CouplesTherapy />} />
          <Route path="/family-therapy" element={<FamilyTherapy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
