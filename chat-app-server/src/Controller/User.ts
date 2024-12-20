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
    const query =
      "INSERT INTO user (user_name, bio, email, password, create_at, flag) VALUES (?, ?, ?, ?, ?, ?)";
    const values: [string, string, string, string, string, number] = [
      user.name,
      user.bio,
      user.email,
      user.password,
      user.createAt.toISOString().slice(0, 19).replace("T", " "),
      user.flag,
    ];

    try {
      const result = await this.db.insert(query, values);
      console.log("User added successfully:", result);
      // this.close();
      return result;
    } catch (error) {
      console.error("Error adding user:", error);
      throw error;
    }
  }

// Cập nhật thông tin user
async updateByEmail(email: string, user: UserData) {
  if (!email) throw new Error("User email is required for update");

  const query =
      "UPDATE user SET user_name = ?, bio = ?, password = ?, create_at = ?, flag = ? WHERE email = ?";
  const values: [string, string, string, string, number, string] = [
      user.name,
      user.bio,
      user.password,
      user.createAt.toISOString().slice(0, 19).replace("T", " "),
      user.flag,
      email,
  ];

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
      // this.close();
      return result;
    } catch (error) {
      console.error("Error deleting user:", error);
      throw error;
    }
  }

  // Cập nhật thông tin hồ sơ người dùng theo ID
  async updateProfileById(id: number, user: UserData) {
    if (!id) throw new Error("User ID is required for update");

    const query = `
        UPDATE user 
        SET user_name = ?, bio = ?
        WHERE id = ?
    `;
    const values: [string, string, number] = [
        user.name,
        user.bio,
        id,
    ];

    try {
        const result = await this.db.update(query, values);
        console.log("User updated successfully:", result);
        return result;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
  }
  // Cập nhật mật khẩu người dùng theo ID
  async updatePasswordById(id: number, user: UserData) {
    if (!id) throw new Error("User ID is required for update");

    const query = `
        UPDATE user 
        SET password = ?
        WHERE id = ?
    `;
    const values: [string, number] = [
        user.password,
        id,
    ];

    try {
        const result = await this.db.update(query, values);
        console.log("User updated successfully:", result);
        return result;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
  }
// Lấy thông tin user theo email
async getUserByEmail(userEmail: string) {
  const query = "SELECT * FROM user WHERE email = ?";
  const values: [string] = [userEmail];

  try {
    const result = await this.db.select(query, values);
    
    // Kiểm tra nếu kết quả trả về là một mảng và lấy phần tử đầu tiên nếu tồn tại
    const user = (result as UserData[]).length > 0 ? (result as UserData[])[0] : null;
    
    console.log("User retrieved successfully:", user);
    return user; // Trả về đối tượng người dùng hoặc null nếu không tìm thấy
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error; // Ném lỗi để xử lý bên ngoài
  }
}

// Lấy thông tin người dùng theo ID
async getUserById(userId: number) {
  const query = "SELECT * FROM user WHERE id = ?";
  const values: [number] = [userId];

  try{
    const result = await this.db.select(query, values);
    const user = (result as UserData[]).length > 0 ? (result as UserData[])[0] : null;
    console.log("User retrieved successfully:", user);
    return user;
  }
  catch(error){
    console.error("Error retrieving user:", error);
    throw error;
  }
}

  async checkUserWhenLogin(email: string, password: string) {
    const query = "SELECT * FROM user WHERE email = ? AND password = ?";
    const values: [string, string] = [email, password];

    try {
      const result = await this.db.select(query, values) as Array<UserData>;
      if(result.length <= 0){
        console.log("Failed to retrieved email and password!");
        return result;
      }
      console.log("User's email and password retrieved successfully!\n", result);
      return result;
    } catch (error) {
      console.error("Error retrieving email and password:", error);
      throw error;
    }
  }

  // Lấy danh sách user
  async getAllUsers() {
    const query = "SELECT * FROM user";

    try {
      const result = await this.db.select(query);
      console.log("User retrieved successfully:", result);
      // this.close();
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
      // this.close();
      if ((row as []).length > 0) return true;
      return false;
    } catch (error) {
      console.error("Error checking email:", error);
      throw error;
    }
  }

  // Đóng kết nối database
  closeConnection() {
    this.db.closeConnect();
  }
}
