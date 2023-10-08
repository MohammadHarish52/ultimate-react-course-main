import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <div>
      <h1>Hello React</h1>
      <Pizza />
    </div>
  );
}

// function name must start with uppercase
function Pizza() {
  return <h2>Pizza</h2>;
}

//React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//React before 18
ReactDOM.render(<App />, document.getElementById("root"));
