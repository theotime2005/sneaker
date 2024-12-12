import { useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, ChevronLeft,  } from 'lucide-react';

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { setShowSearch, getCartCount, user, logout } = useContext(ShopContext);

  return (
    <nav className="flex items-center justify-between py-5 px-6 font-medium text-purple-400 relative">
      <Link to="/">
        <h1 className="text-4xl font-bold neon-text uppercase tracking-wider">SADIE.</h1>
      </Link>

      <ul className="hidden sm:flex gap-8 text-sm text-purple-300 uppercase">
        {['HOME', 'COLLECTION'].map((item, idx) => (
          <NavLink
            key={idx}
            to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            className={({ isActive }) =>
              `group relative flex flex-col items-center gap-1 ${isActive ? "text-purple-400" : "text-purple-300"}`
            }
          >
            <p className="text-2xl font-bold neon-text transition-all duration-300">{item}</p>
            <hr className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/4 border-none h-[1.5px] bg-purple-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
          </NavLink>
        ))}
      </ul>

      <div className="flex items-center gap-6">
        <button
          onClick={() => setShowSearch(true)}
          className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
        >
          Search
        </button>

        
        <div className="relative cursor-pointer">
          <ShoppingCart className="text-2xl neon-text" />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-800 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </div>

       
        <div className="flex items-center gap-6">
          {user ? (
            <>
             
              <button
                onClick={logout}
                className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            
            <NavLink
              to="/login"
              className="text-2xl font-bold neon-text hover:text-neon-red transition-all duration-300"
            >
              Login
            </NavLink>
          )}
        </div>

        <button
          onClick={() => setMenuVisible(!menuVisible)}
          className="sm:hidden"
        >
          <Menu />
        </button>
      </div>

      
      <div
        className={`fixed inset-0 bg-black text-purple-300 transform ${
          menuVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <div className="flex flex-col p-6">
          <button
            onClick={() => setMenuVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer neon-text"
          >
            <ChevronLeft />
            <p>BACK</p>
          </button>

          {['HOME', 'COLLECTION'].map((item, idx) => (
            <NavLink
              key={idx}
              onClick={() => setMenuVisible(false)}
              className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
              to={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
            >
              {item}
            </NavLink>
          ))}

         
          {user ? (
            <>
              <button
                onClick={logout}
                className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink
              to="/login"
              onClick={() => setMenuVisible(false)}
              className="py-2 pl-6 border-b border-purple-400 hover:text-white neon-text transition-all duration-300"
            >
              Login
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

