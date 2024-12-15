import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import Product from './pages/Product';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProfilePage from './components/Profile';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Router>
        
        <Navbar />
        <SearchBar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/product/:documentId" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/favorites" element={<Favorites />} />

          {/* Profile Route */}
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>

        {/* Footer visible on all pages */}
        <Footer />
      </Router>
    </div>
  );
};

export default App;
