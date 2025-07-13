import express from "express";
import cookieparser from "cookie-parser";
import cors from "cors";

import { PORT } from "./config/env.js";
import { connectToDatabase } from "./database/mongodb.js";
import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/message.routes.js";

const app = express();

app.use(express.json());
app.use(cookieparser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/auth", authRouter);
app.use("/api/messages", messageRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Chat Application backend");
});

app.listen(PORT, async () => {
  console.log(
    `Chat Application Backend is running on port http://localhost:${PORT}`
  );
  await connectToDatabase();
});
