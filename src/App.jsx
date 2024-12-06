import { useContext } from "react";
import { ContextGlobal } from "./Context/utils/global.context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Context/Layout/layout";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import "./index.css";

function App() {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={state.theme}>
      <Router>
          <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dentist/:id" element={<Detail />} />
            <Route path="/favs" element={<Favs />} />
          </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
