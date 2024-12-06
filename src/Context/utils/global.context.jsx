import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

export const ContextGlobal = createContext();

const initialState = {
  theme: localStorage.getItem("theme") || "light",
  data: [],
  favs: JSON.parse(localStorage.getItem("favs")) || [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME":{
      return { ...state, theme: action.payload };
    }
    case "TOGGLE_THEME":{
      const newTheme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return { ...state, theme: newTheme };
    } 
    case "SET_DATA":{
      return { ...state, data: action.payload };
    }
    case "ADD_FAV": {
      if (!state.favs.find((fav) => fav.id === action.payload.id)) {
        const updatedFavs = [...state.favs, action.payload];
        localStorage.setItem("favs", JSON.stringify(updatedFavs));
        return { ...state, favs: updatedFavs };
      }
      return state;
    }
    case "REMOVE_FAV": {
      const updatedFavs = state.favs.filter((fav) => fav.id !== action.payload.id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
      return { ...state, favs: updatedFavs };
    }
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch({ type: "SET_DATA", payload: res.data }))
      .catch((err) => console.error(err));
  }, []);
  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};