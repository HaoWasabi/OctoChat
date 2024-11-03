import "dotenv/config";
import DBconnecter from "./Controller/DBconnecter";
import express from "express";
import http from "http";
import { Server } from "socket.io";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json()); // Middleware để parse JSON requests
// const server = http.createServer(app);
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

// export async function ORMConnect() {
//   const connection = await mysqlConnect();
//   const db = drizzle({ client: connection, schema, mode: "planetscale" });
//   return db;
// }

// Lấy danh sách user
app.get("/users", async (req, res) => {
  try {
    const con = new DBconnecter();
    const user = await con.select("SELECT * FORM user");
    res.json(user);
    con.closeConnect();
    // const db = await ORMConnect();
    // const users = await db.select().from(schema.user);
    // res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// async function getChannelMessages() {
//   const db = await ORMConnect();
//   const messages = await db.select().from(schema.user); // Sử dụng schema.user để tránh lỗi
//   console.log(messages);
//   return messages;
// }

// Thêm user
// app.post("/users", async (req, res) => {
//   const { userName, bio, email, password } = req.body;
//   try {
//     const db = await ORMConnect();
//     const result = await db.insert(schema.user).values({
//       userName,
//       bio,
//       email,
//       password,
//       createAt: new Date().toISOString(),
//       flag: 1,
//     }).execute();
//     res.json({ message: "User added successfully", userId: result[0].insertId });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add user" });
//   }
// });

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
