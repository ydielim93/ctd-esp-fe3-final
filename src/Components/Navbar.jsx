import { useContext, useEffect } from "react";
import { ContextGlobal } from "../Context/utils/global.context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.body.classList.add(savedTheme);
      dispatch({ type: "SET_THEME", payload: savedTheme });
    }
  }, [dispatch]);

  const toggleTheme = () => {
    const newTheme = state.theme === "light" ? "dark" : "light";
    document.body.classList.remove(state.theme);
    document.body.classList.add(newTheme);
    localStorage.setItem("theme", newTheme); 
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`navbar ${state.theme}`}>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/favs">Favorites</Link>
      <button onClick={toggleTheme} className="dark-mode-button">
        {state.theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;