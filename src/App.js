import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Animes from 'pages/Animes';
import Games from 'pages/Games';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import News from 'pages/News';
import NotFound from 'pages/NotFound';
import Series from 'pages/Series';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>

      <Navbar />
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/animes" element={<Animes />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/1" element={<News />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
