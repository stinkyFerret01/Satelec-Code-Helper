import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Active StrictMode
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// Unactive StrictMode
root.render(<App />, document.getElementById("root"));
