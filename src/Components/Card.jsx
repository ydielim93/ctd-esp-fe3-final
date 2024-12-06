import { Link } from "react-router-dom";
import { useContext } from "react";
import PropTypes from "prop-types";
import { ContextGlobal } from "../Context/utils/global.context";

const Card = ({ name, username, id }) => {
  const { state, dispatch } = useContext(ContextGlobal);
  const isFavorite = state.favs.some((fav) => fav.id === id);
  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "REMOVE_FAV", payload: { id } });
      alert(`${name} removed from favorites.`);
    } else {
      dispatch({ type: "ADD_FAV", payload: { name, username, id } });
      alert(`${name} added to favorites!`);
    }
  };

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="Doctor" />
      <h3>{name}</h3>
      <p>{username}</p>
      <Link to={`/dentist/${id}`}>View Details</Link>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? "✨" : "⭐"}
      </button>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Card;