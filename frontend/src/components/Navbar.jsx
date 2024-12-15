import { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, ChevronLeft, Heart } from 'lucide-react';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { setShowSearch, getCartCount, user, logout, favorites } = useContext(ShopContext);

  const navLinks = ['HOME', 'COLLECTION'];

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((item, idx) => (
      <NavLink
        key={idx}
        to={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`}
        className={({ isActive }) =>
          `py-2 ${isMobile
            ? 'pl-6 border-b border-purple-400 hover:text-white'
            : 'text-2xl font-bold neon-text hover:text-neon-red'
          } transition-all duration-300 ${isActive && !isMobile ? 'text-purple-400' : 'text-purple-300'
          }`
        }
        onClick={isMobile ? () => setMenuVisible(false) : null}
      >
        {item}
      </NavLink>
    ));

  return (
    <nav className="flex items-center justify-between py-5 px-6 font-medium text-purple-400">
      {/* Left Section: Logo */}
      <Link to="/" className="text-4xl font-bold neon-text uppercase tracking-wider">
        SADIE.
      </Link>

      {/* Middle Section: Desktop Navigation */}
      <ul className="hidden sm:flex items-center space-x-6 text-sm text-purple-300 uppercase">
        {renderNavLinks()}
        {/* User Authentication */}
        {user ? (
          <NavLink
            to="/profile"
            className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
          >
            Profile
          </NavLink>
        ) : (
          <>
            <NavLink
              to="/login"
              className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
            >
              Sign Up
            </NavLink>
          <NavLink  
          to="/profile"
          className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
          >
           Profile
           </NavLink>


          </>
        )}
      </ul>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-6">
        {/* Search Button */}
        <button
          onClick={() => setShowSearch(true)}
          className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
        >
          Search
        </button>

        {/* Favorites Icon */}
        <Link to="/favorites" className="relative">
          <Heart className="text-2xl neon-text" />
          {favorites?.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {favorites.length}
            </span>
          )}
        </Link>

        {/* Shopping Cart */}
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-2xl neon-text" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuVisible(!menuVisible)} className="sm:hidden">
          <Menu />
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-black text-purple-300 transform ${menuVisible ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col p-6">
          {/* Back Button */}
          <button
            onClick={() => setMenuVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer neon-text"
          >
            <ChevronLeft />
            <p>BACK</p>
          </button>

          {/* Mobile Nav Links */}
          {renderNavLinks(true)}

          {/* User Authentication */}
          {user ? (
            <button
              onClick={logout}
              className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <NavLink
                to="/login"
                onClick={() => setMenuVisible(false)}
                className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setMenuVisible(false)}
                className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
              >
                Sign Up
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
