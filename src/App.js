import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Logo from './components/Logo';
import Home from './components/Home';
import Name from './components/Name';
import Location from './components/Location';
import GuessList from './components/GuessList';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Name" element={<Name />} />
            <Route path="/Location" element={<Location />} />
            <Route path="/GuessList" element={<GuessList />} />
          </Routes>
        </Router>
        <Navbar />
      </div>

    </div>
  );
}

export default App;
