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

function Header() {
  return (
    <header className="header">
      <h1>Kaneza's Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const style = { color: "red", fontSize: "45px", textTransform: "uppercase" };
  // const pizzas = pizzaData;
  const pizzas = [];
  const num_pizzas = pizzas.length;
  const style = {};

  return (
    <main className="menu">
      <h2 style={style}>Our Menu</h2>

      {num_pizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObject={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Kindly comeback later 😊</p>
      )}

      {/* <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoName="pizzas/prosciutto.jpg"
        price={10}
      />

      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObject.photoName} alt={props.pizzaObject.name} />
      <div>
        <h3>{props.pizzaObject.name}</h3>
        <p>{props.pizzaObject.ingredients}</p>
        <span>{props.pizzaObject.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open_hour = 12;
  const close_hour = 22;
  const is_open = hour >= open_hour && hour <= close_hour;
  console.log(is_open);
  console.log(hour);

  // if (hour >= open_hour && hour <= close_hour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  return (
    <footer className="footer">
      {is_open && (
        <div className="order">
          <p>
            We're open until {close_hour}:00. Come visit us or order online.
          </p>
          <button className="btn">Order Now</button>
        </div>
      )}
      {/* {new Date().toLocaleTimeString()} We're currently open! */}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

// Rendering in React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Before React v18
// React.render(<App />, document.getElementById("root"));
