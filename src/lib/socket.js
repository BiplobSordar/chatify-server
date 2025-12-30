import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

// Map to track online users
const userSocketMap = {};

// Socket.IO server with CORS
const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // server requests
      const cleanOrigin = origin.replace(/\/$/, "");
      if (cleanOrigin === ENV.CLIENT_URL || cleanOrigin.endsWith(".vercel.app")) {
        return callback(null, true);
      }
      return callback(new Error("Socket.IO CORS blocked"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  },
  transports: ["websocket", "polling"], // fallback to polling if WebSocket fails
});

// Use authentication middleware
io.use(socketAuthMiddleware);

// Function to get a user's socket ID
export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}

// Handle connections
io.on("connection", (socket) => {
  console.log("A user connected", socket.user?.fullName);

  const userId = socket.userId;
  userSocketMap[userId] = socket.id;

  io.emit("getOnlineUsers", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user?.fullName);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
