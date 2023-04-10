import L from "leaflet";
import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";

import {
  Delivery,
  DeliveryPosition,
  Destination,
  Restaurant,
  User,
} from "@/services/websocket";
import "leaflet/dist/leaflet.css";

interface MapProps {
  restaurants: Restaurant[];
  destinations: Destination[];
  deliveries: Delivery[];
  deliveryPositions: DeliveryPosition[];
  users: User[];
}

var stringToColour = function (str: string) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  var colour = "#";
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

const SetViewMap = ({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

const Map = ({
  restaurants,
  destinations,
  deliveries,
  deliveryPositions,
  users,
}: MapProps) => {
  // Fix Leaflet icons
  useEffect(() => {
    L.Icon.Default.mergeOptions({
      iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
      iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png",
      shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png",
    });
  }, []);

  const findDestinationById = (id: string): Destination | undefined => {
    return destinations.find((destination) => destination.id === id);
  };

  const findRestaurantById = (id: string): Restaurant | undefined => {
    return restaurants.find((restaurant) => restaurant.id === id);
  };

  const findDeliveryById = (deliveryId: string) => {
    return deliveries.find((delivery) => delivery.id === deliveryId);
  };

  const findUserById = (userId: string) => {
    return users.find((user) => user.id === userId);
  };

  return (
    <div className="my-24 mx-24" style={{ height: "80vh", width: "90%" }}>
      <MapContainer style={{ height: "100%", width: "100%" }}>
        <SetViewMap center={[-33.4489, -70.6693]} zoom={12} />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {restaurants.map((restaurant) => (
          <Marker
            key={restaurant.id}
            position={[restaurant.position.lat, restaurant.position.long]}
          >
            <Popup>
              <div>
                <h3>{restaurant.name}</h3>
                <p>ID: {restaurant.id}</p>
                <p>Lat: {restaurant.position.lat}</p>
                <p>Long: {restaurant.position.long}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {destinations.map((destination) => (
          <Marker
            key={destination.id}
            position={[destination.position.lat, destination.position.long]}
          >
            <Popup>
              <div>
                <h3>{destination.name}</h3>
                <p>ID: {destination.id}</p>
                <p>Lat: {destination.position.lat}</p>
                <p>Long: {destination.position.long}</p>
              </div>
            </Popup>
          </Marker>
        ))}
        {deliveries.map((delivery) => {
          const destination = findDestinationById(delivery.destination_id);
          const restaurant = findRestaurantById(delivery.restaurant_id);
          if (!destination || !restaurant) return null;

          return (
            <React.Fragment key={delivery.id}>
              <Marker
                position={[destination.position.lat, destination.position.long]}
              >
                <Popup>
                  <div>
                    <h3>{destination.name}</h3>
                    <p>ID: {destination.id}</p>
                    <p>Lat: {destination.position.lat}</p>
                    <p>Long: {destination.position.long}</p>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}
        {deliveryPositions.map((deliveryPosition, index) => {
          const delivery = findDeliveryById(deliveryPosition.delivery_id);
          const restaurant = findRestaurantById(delivery?.restaurant_id || "");
          const destination = findDestinationById(
            delivery?.destination_id || ""
          );
          const color = stringToColour(delivery?.id || "");
          const user = findUserById(delivery?.user_id || "");

          return (
            <React.Fragment key={deliveryPosition.delivery_id}>
              {restaurant && destination ? (
                <>
                  <Polyline
                    positions={[
                      [restaurant?.position.lat, restaurant?.position.long],
                      [
                        deliveryPosition.position.lat,
                        deliveryPosition.position.long,
                      ],
                    ]}
                    color={color}
                    dashArray="4,4" // Añade esta línea para que la línea sea punteada
                  />
                  <Polyline
                    positions={[
                      [
                        deliveryPosition.position.lat,
                        deliveryPosition.position.long,
                      ],
                      [destination.position.lat, destination.position.long],
                    ]}
                    color={color}
                  />
                </>
              ) : null}
              <Marker
                position={[
                  deliveryPosition.position.lat,
                  deliveryPosition.position.long,
                ]}
                icon={L.divIcon({ className: "delivery-icon", html: "🚴" })}
              >
                <Popup>
                  <div>
                    <h3>Repartidor {index + 1}</h3>
                    <p>ID de entrega: {deliveryPosition.delivery_id}</p>
                    <p>User: {user?.name || ""}</p>
                    <p>Restaurante: {restaurant?.name}</p>
                    <p>Destino: {destination?.name}</p>
                  </div>
                </Popup>
              </Marker>
            </React.Fragment>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default Map;
