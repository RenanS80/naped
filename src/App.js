import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Technology from 'pages/Technology';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Sports from 'pages/Sports';
import Entertainments from 'pages/Entertainments';
import Business from 'pages/Business';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technologies" element={<Technology />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/entertainments" element={<Entertainments />} />
        <Route path="/business" element={<Business />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
