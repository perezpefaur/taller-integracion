import { ChatMessage } from "@/components/chat";
import ReconnectingWebSocket from "reconnecting-websocket";

const WEBSOCKET_URL = "wss://tarea-2.2023-1.tallerdeintegracion.cl/connect";

interface Message {
  type: string;
  [key: string]: any;
}

export interface User {
  id: string;
  name: string;
}

export interface Restaurant {
  id: string;
  name: string;
  position: {
    lat: number;
    long: number;
  };
}

export interface Destination {
  id: string;
  name: string;
  position: {
    lat: number;
    long: number;
  };
}

export interface Delivery {
  id: string;
  restaurant_id: string;
  product_id: string;
  user_id: string;
  destination_id: string;
}

export interface DeliveryPosition {
  delivery_id: string;
  position: {
    lat: number;
    long: number;
  };
}

export interface DeliveryStatus {
  delivery_id: string;
  status: string;
}

export interface WebSocketClientListener {
  onUsersUpdate: (users: User[]) => void;
  onRestaurantsUpdate?: (restaurants: any[]) => void;
  onDestinationsUpdate?: (destinations: Destination[]) => void;
  onDeliveriesUpdate?: (deliveries: Delivery[]) => void;
  onPositionUpdate?: (deliveries: DeliveryPosition) => void;
  onChatMessage?: (chatMessage: ChatMessage) => void;
  onDeliveryStatusUpdate?: (deliveries: DeliveryStatus) => void;
}

class WebSocketClient {
  private socket: ReconnectingWebSocket | null;
  private listeners: WebSocketClientListener[];

  constructor() {
    this.socket = null;
    this.listeners = [];
  }

  addListener(listener: WebSocketClientListener) {
    this.listeners.push(listener);
  }

  removeListener(listener: WebSocketClientListener) {
    this.listeners = this.listeners.filter((l) => l !== listener);
  }

  connect(email: string, studentNumber: string) {
    const token = btoa(`${email}:${studentNumber}`);
    const authHeader = `Basic ${token}`;

    console.log("Connecting to WebSocket...");
    this.socket = new ReconnectingWebSocket(WEBSOCKET_URL);

    this.socket.addEventListener("open", (event) => {
      console.log("WebSocket open:", event);
      this.join(authHeader);
    });

    this.socket.addEventListener("message", (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "USERS") {
        this.handleUsersEvent(data.payload);
      } else if (data.type === "RESTAURANTS") {
        this.handleRestaurantsEvent(data.payload);
      } else if (data.type === "DESTINATIONS") {
        this.handleDestinationsEvent(data.payload);
      } else if (data.type === "DELIVERIES") {
        this.handleDeliveriesEvent(data.payload);
      } else if (data.type === "POSITION") {
        this.handlePositionEvent(data.payload);
      } else if (data.type === "CHAT") {
        this.handleChatEvent(data.payload);
      } else if (data.type === "DELIVERY_STATUS") {
        this.handleDeliveryStatus(data.payload);
      }
    });

    this.socket.addEventListener("close", (event) => {
      console.log("WebSocket close:", event);
    });
  }

  join(authHeader: string) {
    this.sendMessage({ type: "JOIN", payload: { authorization: authHeader } });
  }

  sendMessage(data: Message) {
    console.log("Sending message:", data);
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(data));
    } else {
      console.error("WebSocket not connected");
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }

  private handleUsersEvent(users: User[]) {
    this.listeners.forEach((listener) => {
      listener.onUsersUpdate(users);
    });
  }

  private handleRestaurantsEvent(restaurants: any[]) {
    this.listeners.forEach((listener) => {
      if (listener.onRestaurantsUpdate) {
        listener.onRestaurantsUpdate(restaurants);
      }
    });
  }

  private handleDestinationsEvent(destinations: Destination[]) {
    this.listeners.forEach((listener) => {
      if (listener.onDestinationsUpdate) {
        listener.onDestinationsUpdate(destinations);
      }
    });
  }

  private handleDeliveriesEvent(deliveries: Delivery[]) {
    this.listeners.forEach((listener) => {
      if (listener.onDeliveriesUpdate) {
        listener.onDeliveriesUpdate(deliveries);
      }
    });
  }

  private handlePositionEvent(delivery: DeliveryPosition) {
    this.listeners.forEach((listener) => {
      if (listener.onPositionUpdate) {
        listener.onPositionUpdate(delivery);
      }
    });
  }

  private handleChatEvent(chatMessage: ChatMessage) {
    this.listeners.forEach((listener) => {
      if (listener.onChatMessage) {
        listener.onChatMessage(chatMessage);
      }
    });
  }

  private handleDeliveryStatus(delivery: DeliveryStatus) {
    this.listeners.forEach((listener) => {
      if (listener.onDeliveryStatusUpdate) {
        listener.onDeliveryStatusUpdate(delivery);
      }
    });
  }
}

export default WebSocketClient;
