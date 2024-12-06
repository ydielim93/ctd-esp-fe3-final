import { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Context/utils/global.context";

const Home = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {state.data.map((dentist) => (
          <Card key={dentist.id} {...dentist} />
        ))}
      </div>
    </main>
  );
};

export default Home;