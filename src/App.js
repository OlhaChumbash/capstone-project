import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingPage  from './components/BookingPage';
import HomePage from './components/HomePage';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reservations" element={<BookingPage  />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
