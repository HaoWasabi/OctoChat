import "dotenv/config";
import { drizzle } from "drizzle-orm/mysql2";
import * as schema from "./db/schema";
import mysql from "mysql2/promise";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const port = process.env.PORT ?? 3000;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

export async function mysqlConnect() {
  const connection = await mysql.createConnection({
    uri: process.env.DATABASE_URL,
  });
  return connection;
}

export async function ORMConnect() {
  const connection = await mysqlConnect();

  const db = drizzle({ client: connection, schema, mode: "planetscale" });
  return db;
}

io.on("connection", (socket) => {
  console.log(`user ${socket.id} has been connected`);
});

server.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
