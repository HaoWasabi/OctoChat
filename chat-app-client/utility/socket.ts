import { io } from "socket.io-client";

export const socket = io(process.env.EXPO_PUBLIC_SERVER_URL, {
  autoConnect: false,
  transports: ["websocket", "polling"],
});
