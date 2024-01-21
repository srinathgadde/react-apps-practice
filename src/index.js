import React, { Children } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Sky from "./Sky";

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click me to visit Google",
// };

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google
  </a>
);
const username = "srinath";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  username
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  reactElement
  // </React.StrictMode>
);
