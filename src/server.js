import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import { ENV } from "./lib/env.js";
import { app, server } from "./lib/socket.js";

const __dirname = path.resolve();

const PORT = ENV.PORT || 3000;

app.use(express.json({ limit: "5mb" }));
const allowedOrigins = [
  process.env.CLIENT_URL?.replace(/\/$/, ""), 
];


app.use(
  cors({
    origin: (origin, callback) => {
     
      if (!origin) return callback(null, true);

    
      const cleanOrigin = origin.replace(/\/$/, "");

      if (allowedOrigins.includes(cleanOrigin) || cleanOrigin.endsWith(".vercel.app")) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);




app.get("/", (req, res) => {
  res.send("Chatify Server is running ");
});
server.listen(PORT, () => {
  console.log("Server running on port: " + PORT);
  connectDB();
});
