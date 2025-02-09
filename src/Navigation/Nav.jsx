import "./Nav.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";

const Nav = ({ handleInputChange, query, toggleSidebar }) => {
  return (
    <nav>
      <button className="menu-btn" onClick={toggleSidebar}>
        <HiMenuAlt2 />
      </button>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          placeholder="Rechercher un produit"
          onChange={handleInputChange}
          value={query}
        />
        <div className="profile-container-mobile">
          <a href="#">
            <FiHeart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineShoppingCart className="nav-icons" />
          </a>
          <a href="#">
            <AiOutlineUserAdd className="nav-icons" />
          </a>
        </div>
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
