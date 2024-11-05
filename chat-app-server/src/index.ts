import "dotenv/config";
import express, { Request, Response } from 'express';
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

// Lấy danh sách người dùng
app.get("/user/list", async (req, res) => {
  try {
    const userController = new User(); // Tạo đối tượng User để thao tác với DB
    const users = await userController.getAllUsers(); // Sử dụng phương thức lấy danh sách user
    res.json(users);
    console.log("Danh sách user: " + users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});


// Lấy thông tin một người dùng theo ID
// app.get("/user/:id", async (req: Request<{ id: string }>, res: Response) => {
//   const { id } = req.params;
//   try {
//     const userController = new User();
//     const user = await userController.getUserById(Number(id));
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ error: "Failed to retrieve user" });
//   }
// });

// Thêm người dùng mới
app.post("/user/insert", async (req, res) => {
  const { name, email, password } = req.body;
  console.log(name,email,password);
  try {
    const userController = new User(); // Tạo đối tượng User để thao tác với DB
    
    const result = await userController.insert({ 
      avatar: "", 
      name, 
      bio: "", 
      email, 
      password, 
      createAt: new Date(), 
      flag: 1 
    }); // Sử dụng phương thức thêm user
    res.json({ message: "User added successfully", result });
  } catch (error) {
    res.status(500).json({ error: "Failed to add user" });
  }
});

// Kiểm tra xem email đã tồn tại hay chưa
app.post("/user/check-email", async (req, res) => {
  const { email } = req.body;
  try {
    const userController = new User();
    const exists = await userController.checkEmailExists(email);
    res.json({ exists });
    console.log("Email đã tồn tại: " + exists);
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
      flag: 1 });
    res.json({ message: "User updated successfully", result });
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
  } catch (error) {
    res.status(500).json({ error: "Failed to delete user" });
  }
});

server.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`); 
  console.log(`list user: http://localhost:${port}/user/list`);
});
