import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Reservations from './components/Reservations';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/reservations" element={<Reservations />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
