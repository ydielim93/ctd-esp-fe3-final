import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Context/utils/global.context";

const Detail = () => {
  const { id } = useParams(); 
  const { state, theme } = useContext(ContextGlobal); 
  const user = state.data.find((user) => user.id === parseInt(id));

  if (!user) {
    return <p>Usuario no encontrado.</p>; 
  }

  return (
    <div className={`detail-page ${theme}`}>
      <h2>Detalles del Usuario</h2>
      <p><strong>Nombre:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Teléfono:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div>
  );
};

export default Detail;