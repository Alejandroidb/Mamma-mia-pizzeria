import React, { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const ShoppingCart = () => {
  const { carrito, anadirCarrito, removerCarrito } = useContext(PizzaContext);

  // Agrupar pizzas por tipo
  const groupedPizzas = carrito.reduce((acc, pizza) => {
    const existingPizza = acc.find(p => p.id === pizza.id);
    if (existingPizza) {
      existingPizza.quantity += 1;
      existingPizza.totalPrice += pizza.price;
    } else {
      acc.push({ ...pizza, quantity: 1, totalPrice: pizza.price });
    }
    return acc;
  }, []);

  // Calcular el precio total
  const PrecioTotal = groupedPizzas.reduce((total, pizza) => total + pizza.totalPrice, 0);

  return (
    <div className="container mt-3">
      <h3>Carrito de Compras</h3>
      {groupedPizzas.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {groupedPizzas.map((pizza) => (
            <div key={pizza.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={pizza.img}
                    className="img"
                    alt={pizza.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                  <div className="d-flex">
                    <h5 className="card-title">{pizza.name}</h5>
                    <div className="ms-auto d-flex">
                    <p className="card-text me-1">
                      <strong>Total:</strong> ${pizza.totalPrice}
                    </p>
                    <button
                      className="btn btn-primary me-1"
                      onClick={() => anadirCarrito(pizza)}
                    >
                      +
                    </button>
                    <p className="card-text">
                      {pizza.quantity}
                    </p>
                    <button
                      className="btn btn-danger ms-1"
                      onClick={() => removerCarrito(pizza)}
                    >
                      -
                    </button>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="mt-3">
            <h4>Total: ${PrecioTotal}</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;