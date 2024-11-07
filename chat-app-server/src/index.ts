import "dotenv/config";
import express from "express";
import cors from "cors";
import http from "http";
import { Server } from "socket.io";
import User from "./Controller/User"; // Import lớp User
import DBconnecter from "./Controller/DBconnecter";

const port = process.env.PORT ?? 3000;
const app = express();
app.use(express.json()); // Middleware để parse JSON requests
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});
app.use(cors()); //alow cors(Cross Origin Resource Sharing)

// Lấy danh sách người dùng
app.get("/user/list", async (req, res) => {
  try {
    const userController = new User(); // Tạo đối tượng User để thao tác với DB
    const users = await userController.getAllUsers(); // Sử dụng phương thức lấy danh sách user
    res.json(users);
    userController.closeConnection();
    console.log("Danh sách user: " + users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

// Thêm người dùng mới
app.post("/user/insert", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name, email, password);
  try {
    const userController = new User(); // Tạo đối tượng User để thao tác với DB

    const result = await userController.insert({
      avatar: "",
      name,
      bio: "",
      email,
      password,
      createAt: new Date(),
      flag: 1,
    }); // Sử dụng phương thức thêm user
    res.json({ message: "User added successfully", result });
    userController.closeConnection();
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Kiểm tra xem email đã tồn tại hay chưa
app.post("/user/check-email", async (req, res) => {
  console.log(req.body);
  const { email } = req.body;
  try {
    const userController = new User();
    const exists = await userController.checkEmailExists(email);
    if (exists) {
      res.send({ success: false, message: "email đã tồn tại" });
      userController.closeConnection();
      return;
    }
    res.send({ success: true, message: "email chưa tồn tại" });
    userController.closeConnection();
    // console.log("Email đã tồn tại: " + exists);
  } catch (error) {
    res.status(500).json({ error: "Failed to check email" });
  }
});

// Cập nhật thông tin người dùng
app.put("/user/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, password } = req.body;
  try {
    const userController = new User();
    const result = await userController.update(Number(id), {
      id: Number(id),
      avatar: "",
      name,
      email,
      bio: "",
      password,
      createAt: new Date(),
      flag: 1,
    });
    res.json({ message: "User updated successfully", result });
    userController.closeConnection();
  } catch (error) {
    res.status(500).json({ error: "Failed to update user" });
  }
});

// Xóa người dùng
app.delete("/user/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const userController = new User();
    const result = await userController.delete(Number(id));
    res.json({ message: "User deleted successfully", result });
    userController.closeConnection();
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

// Login API endpoint
app.post("/user/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const userController = new User();
    const result = await userController.checkUserWhenLogin(email, password);
    if (result.length <= 0) {
      res.json({ message: "Login failed!" });
      userController.closeConnection();
      return;
    }
    res.json({ message: "Login successfully!", result });
    userController.closeConnection();
  } catch (error) {
    res.json({ message: "Failed to login!" });
  }
});

app.get("/:server_id/channel/", async (req, res) => {
  try {
    const { server_id } = req.params;
    const conn = new DBconnecter();
    const result = await conn.select(
      "SELECT * FROM server_channel Where server_id = ?",
      [server_id]
    );
    // console.log(result);
    res.json(result);
    conn.closeConnect();
  } catch (error) {
    console.log(error);
    res.json({ message: "something wrong happen" });
  }
});

app.get("/channel/:channel_id/message", async (req, res) => {
  try {
    const { channel_id } = req.params;
    const conn = new DBconnecter();
    const result = await conn.select(
      `SELECT * FROM(
      SELECT channel_message.id,user_name,message,update_at FROM channel_message,user 
      WHERE channel_message.user_id = user.id AND channel_message.channel_id = ? 
      ORDER BY channel_message.id DESC LIMIT ?,?) c ORDER BY id`,
      [channel_id, 0, 50]
    );
    res.json(result);
  } catch (error) {
    console.log(error);
    res.json({ message: "something wrong happen" });
  }
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
  // console.log(`list user: http://localhost:${port}/user/list`);
});
