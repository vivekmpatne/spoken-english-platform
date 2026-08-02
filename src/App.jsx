import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import { getTheme } from './utils/storage';

import Dashboard from './pages/Dashboard.jsx';
import Roadmap from './pages/Roadmap.jsx';
import DayDetail from './pages/DayDetail.jsx';
import Grammar from './pages/Grammar.jsx';
import Vocabulary from './pages/Vocabulary.jsx';
import Interview from './pages/Interview.jsx';
import Speaking from './pages/Speaking.jsx';
import SearchResults from './pages/SearchResults.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', getTheme());
  }, []);

  return (
    <>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/roadmap/day/:day" element={<DayDetail />} />
          <Route path="/grammar" element={<Grammar />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/interview" element={<Interview />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
