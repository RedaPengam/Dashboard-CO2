import './App.css';
import Body from './components/Body';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">    
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={Body("Home")} />
        <Route exact path="/computer" element={Body("💻 Ordinateur")} />
        <Route exact path="/smartphone" element={Body("📱 Smartphone")} />
        <Route exact path="/screen" element={Body("🖥 Ecran")} />
      </Routes>
    </Router>
    </div>
  );
}