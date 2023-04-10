import { ICourse } from "@/pages/course/[id]";
import WebSocketClient, { Destination, Restaurant } from "@/services/websocket";
import React, { useState } from "react";

interface OrderFormProps {
  wsClient: WebSocketClient;
  restaurants: Restaurant[];
  destinations: Destination[];
  products: ICourse[];
}

const OrderForm = ({
  wsClient,
  restaurants,
  destinations,
  products,
}: OrderFormProps) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    wsClient.sendMessage({
      type: "ORDER",
      payload: {
        restaurant_id: selectedRestaurant,
        product_id: selectedProduct,
        destination: selectedDestination,
      },
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="restaurant"
        >
          Restaurante:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedRestaurant}
          onChange={(e) => setSelectedRestaurant(e.target.value)}
          id="restaurant"
        >
          <option value="">Selecciona un restaurante</option>
          {restaurants.map((restaurant) => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="product"
        >
          Producto:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedProduct}
          onChange={(e) => setSelectedProduct(e.target.value)}
          id="product"
        >
          <option value="">Selecciona un producto</option>
          {products.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="destination"
        >
          Destino:
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedDestination}
          onChange={(e) => setSelectedDestination(e.target.value)}
          id="destination"
        >
          <option value="">Selecciona un destino</option>
          {destinations.map((destination) => (
            <option key={destination.id} value={destination.id}>
              {destination.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Crear pedido
        </button>
      </div>
    </form>
  );
};

export default OrderForm;
