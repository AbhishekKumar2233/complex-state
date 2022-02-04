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
//you can use it any where
console.log(fruits);

const fullname = {
  fname: "abhi",
  lname: "kumar"
};

const user = {
  ...fullname,
  id: 1,
  username: "abhi123"
};
console.log(user);
//using spread op we get value of fullname object as value of user object
//if we do not you it we get fullname as nested object
