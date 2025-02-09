import { useEffect, useRef } from "react";
import "./Sidebar.css";
import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";

const Sidebar = ({ handleChange, isVisible, setIsSidebarVisible }) => {
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isVisible &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setIsSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, setIsSidebarVisible]);

  return (
    <>
      {isVisible && <div className="sidebar-overlay" />}
      <section
        ref={sidebarRef}
        className={`sidebar ${isVisible ? "visible" : ""}`}
      >
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;
