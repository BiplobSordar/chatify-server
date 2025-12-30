import { Server } from "socket.io";
import http from "http";
import express from "express";
import { ENV } from "./env.js";
import { socketAuthMiddleware } from "../middleware/socket.auth.middleware.js";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: (origin, callback) => {
     
      if (!origin) return callback(null, true);
      if (origin.endsWith(".vercel.app") || origin === process.env.CLIENT_URL?.replace(/\/$/, "")) {
        return callback(null, true);
      }
      return callback(new Error("Socket.IO CORS blocked"));
    },
    methods: ["GET", "POST"],
    credentials: true,
  },
});


io.use(socketAuthMiddleware);


export function getReceiverSocketId(userId) {
  return userSocketMap[userId];
}


const userSocketMap = {}; 

io.on("connection", (socket) => {
  console.log("A user connected", socket.user.fullName);

  const userId = socket.userId;
  userSocketMap[userId] = socket.id;


  io.emit("getOnlineUsers", Object.keys(userSocketMap));

 
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.user.fullName);
    delete userSocketMap[userId];
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
  });
});

export { io, app, server };
