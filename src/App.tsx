import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Wrap and center all app content in a Bulma container. */}
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
