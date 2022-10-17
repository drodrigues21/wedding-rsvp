import Logo from './components/Logo';
import Home from './components/Home';
import Location from './components/Location';
import GuessList from './components/GuessList';
import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Logo />
        <Home />
        <Location />
        <GuessList />
        <Navbar />
      </div>

    </div>
  );
}

export default App;
