import DBConecter from "./DBconnecter";

interface UserData {
  id?: number; // Optional, as it might be auto-generated by the database
  avatar: string; 
  name: string;
  bio: string; // Optional
  email: string;
  password: string;
  createAt: Date; // Optional, as it might be auto-generated by the database
  flag: number; // Optional
}

export default class User {
  private db: DBConecter;

  constructor() {
    this.db = new DBConecter();
  }

  // Thêm user mới vào database
  async insert(user: UserData) {
    const query = "INSERT INTO user (user_name, bio, email, password, create_at, flag) VALUES (?, ?, ?, ?, ?, ?)";
    const values: [string, string, string, string, string, number] = [user.name, user.bio, user.email, user.password, user.createAt.toISOString(), user.flag];

    try {
      const result = await this.db.insert(query, values);
      console.log("User added successfully:", result);
      return result;
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }

  // Cập nhật thông tin user
  async update(userID: number, user: UserData) {
    if (!userID) throw new Error("User ID is required for update");

    const query = "UPDATE user SET user_avt = ?, user_name = ?, email = ?, password = ?, cread_at = ?, flag = ? WHERE id = ?";
    const values: [string, string, string, string, string, number, number] = [user.avatar, user.name, user.email, user.password, user.createAt.toISOString(), user.flag, userID];

    try {
      const result = await this.db.update(query, values);
      console.log("User updated successfully:", result);
      return result;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }

  // Xóa user theo ID
  async delete(userId: number) {
    const query = "DELETE FROM user WHERE id = ?";
    const values: [number] = [userId];

    try {
      const result = await this.db.delete(query, values);
      console.log("User deleted successfully:", result);
      return result;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

    // Lấy thông tin user theo ID
    async getUserById(userId: number) {
        const query = "SELECT * FROM user WHERE id = ?";
        const values: [number] = [userId];
    
        try {
            const result = await this.db.select(query, values);
            console.log("User retrieved successfully:", result);
            return result;
        } catch (error) {
            console.error("Error retrieving user:", error);
            throw error;
        }
        }

    // Lấy danh sách user
    async getAllUsers() {
        const query = "SELECT * FROM user";
    
        try {
            const result = await this.db.select(query);
            console.log("User retrieved successfully:", result);
            return result;
        } catch (error) {
            console.error("Error retrieving user:", error);
            throw error;
        }
    }

    async checkEmailExists(email: string) {
      const query = "SELECT * FROM user WHERE email = ?";
      try {
        const row = await this.db.select(query, [email]); // Giả sử bạn có db là kết nối đến cơ sở dữ liệu
        return row; // Trả về true nếu email đã tồn tại
      } catch (error) {
        console.error("Error checking email:", error);
      throw error;
      }
    }

  // Đóng kết nối database
  close() {
    this.db.closeConnect();
  }
}