import { useState, useEffect } from "react";
import Card from "../Components/Card";

const Favs = () => {
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    const storedFavs = JSON.parse(localStorage.getItem("favs")) || [];
    setFavs(storedFavs);
  }, []);
  return (
    <main>
      <h1>Favorites</h1>
      <div className="card-grid">
        {favs.map((fav) => (
          <Card key={fav.id} {...fav} />
        ))}
      </div>
    </main>
  );
};

export default Favs;