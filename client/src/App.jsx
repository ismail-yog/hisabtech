import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/admin" element={<Admin />} />
          
          {/* Main Website Layout */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="about" element={<About />} />
            <Route path="why-us" element={<WhyUs />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
