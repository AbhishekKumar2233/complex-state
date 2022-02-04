import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);

const citrus = ["Lime", "Lemon", "Orange"];
const fruits = ["Apple", "Banana", "Orange", "Coconut", ...citrus];
// ...citrus is spread operator
console.log(fruits);
