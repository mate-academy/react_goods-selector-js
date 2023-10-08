import ReactDOM from "react-dom";
import { App } from "./App";
import { useState } from "react";

ReactDOM.render(<App />, document.getElementById("root"));
export const [item, setItem] = useState("Jam");
