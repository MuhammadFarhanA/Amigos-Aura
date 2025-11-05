import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import CoreSoftwareDevelopment from './pages/services/CoreSoftwareDevelopment';
import DigitalTransformation from './pages/services/DigitalTransformation';
import B2BMarketingCommerce from './pages/services/B2BMarketingCommerce';
import CybersecurityCompliance from './pages/services/CybersecurityCompliance';
import UIUXDesign from './pages/services/UIUXDesign';
import CloudDevOps from './pages/services/CloudDevOps';
import DataAnalytics from './pages/services/DataAnalytics';
import AIMachineLearning from './pages/services/AIMachineLearning';
import ConsultingOutsourcing from './pages/services/ConsultingOutsourcing';
import WhiteLabelPartnership from './pages/services/WhiteLabelPartnership';
import AdditionalB2BServices from './pages/services/AdditionalB2BServices';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/core-software-development" element={<CoreSoftwareDevelopment />} />
          <Route path="/services/digital-transformation" element={<DigitalTransformation />} />
          <Route path="/services/b2b-marketing-commerce" element={<B2BMarketingCommerce />} />
          <Route path="/services/cybersecurity-compliance" element={<CybersecurityCompliance />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
          <Route path="/services/cloud-devops" element={<CloudDevOps />} />
          <Route path="/services/data-analytics" element={<DataAnalytics />} />
          <Route path="/services/ai-machine-learning" element={<AIMachineLearning />} />
          <Route path="/services/consulting-outsourcing" element={<ConsultingOutsourcing />} />
          <Route path="/services/white-label-partnership" element={<WhiteLabelPartnership />} />
          <Route path="/services/additional-b2b-services" element={<AdditionalB2BServices />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;