import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import Home from './components/layout/Home';
import Footer from './components/layout/Footer';
import SearchPage from './components/layout/SearchPage';
import Modal from './components/layout/Modal';
import Login from './components/Login';

const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Modal />} />
          <Route path='/login' element={<Login/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;