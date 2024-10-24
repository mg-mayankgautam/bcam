import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './Layout';
import About from './pages/About';
import Products from './pages/Products';
import Terms from './components/TermsConditions/Terms';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

function App() {
  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="termsandconditions" element={<Terms />} />
        <Route path="privacypolicy" element={<PrivacyPolicy />} />

      </Route>

    </Routes>
  );
}

export default App;
