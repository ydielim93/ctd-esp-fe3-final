import ReactDOM from "react-dom";
import App from "./App";
import { ContextProvider } from "./Context/utils/global.context";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);



