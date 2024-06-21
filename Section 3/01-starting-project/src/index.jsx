import ReactDOM from "react-dom/client"; //responsible for redndering

import App from "./App.jsx";
import "./index.scss";

const entryPoint = document.getElementById("root"); //takes an existing html element,injects react component into this element
ReactDOM.createRoot(entryPoint).render(<App />); //Rendermethod
