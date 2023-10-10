import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
// inlining styling in react is like a object in javascript
function Header() {
  // const style = {};
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : null}

      {/* <Pizza
        name="Pizza Spinaci"
        ingedient="Tomato , mozarella , spinach , and ricotta cheese"
        photo="pizzas/spinaci.jpg"
        price="10"
      />
      <Pizza
        name="Pizza Funghi"
        ingedient="Tomato , Mushrooms"
        price="12"
        photo="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

// function name must start with uppercase
// the actual props passed can be passed as destructuring and used in the component
function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt="pizza"></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  // if (hour >= openHour && hour <= closeHour) alert("We are currently open");

  // if (!isOpen)
  //   return (
  //     <p>
  //       We're Happy to Welcome you between {openHour} and {closeHour}
  //     </p>
  //   );
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We're Happy to Welcome you between {openHour} and {closeHour}
        </p>
      )}
    </footer>
  );
}

// values of other functions can also be taken as a prop and used in another component

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're Open from {openHour} until {closeHour}:00 Come Visit us or Order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
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
