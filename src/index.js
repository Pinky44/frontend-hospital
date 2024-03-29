import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createContext } from "react";
import Store from "./store/store";
import App from "./App";
import "./index.scss";

const store = new Store();
export const Context = createContext(
  store,
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Context.Provider>
);