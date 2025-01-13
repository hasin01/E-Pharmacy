// src/App.jsx
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Medicine from './pages/Medicine/Medicine';
import Store from './pages/Store/Store';
import NotFound from './pages/NotFound/NotFound';
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Router basename="/E-Pharmacy/">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/Medicine" element={<Layout><Medicine /></Layout>} />
        <Route path="/Store" element={<Layout><Store /></Layout>} />
        <Route path="*" element={<Layout><NotFound /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
