import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';
import Products from './pages/Products';
import Terms from './components/TermsConditions/Terms';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import MediaGallery from './pages/MediaGallery';
import Contact from './pages/Contact';

function App() {
  // commit
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="products/:id/:code" element={<Products />} />
        <Route path="mediagallery" element={<MediaGallery />} />
        <Route path="contactus" element={<Contact />} />
        <Route path="termsandconditions" element={<Terms />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />

      </Route>

    </Routes>
  );
}

export default App;
