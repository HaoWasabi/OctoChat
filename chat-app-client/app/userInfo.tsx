import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "../components/Button";
import { router, Redirect } from "expo-router";
import { useSession } from "../components/Seesionprovider";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    marginTop: 50,
    padding: 10,
    color: "#fff",
  },
  header: {
    width: "100%",
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  user_info_text: {
    fontSize: 14,
    color: "#fff",
  },
  user_info_text2: {
    fontSize: 14,
    color: "#F00",
  },
  input: {
    width: "100%",
    padding: 10,
    backgroundColor: "black",
    borderRadius: 3,
  },
  input_text: {
    color: "#fff",
    fontSize: 14,
    padding: 2,
  },
  backBtn: {
    marginBottom: 30,
  },
  backBtnText: {
    color: "white",
  },
  save_button: {
    marginVertical: "2%",
    paddingVertical: "3.5%",
    paddingHorizontal: "20%",
    marginTop: "5%",
    backgroundColor: "#5865F2",
    borderRadius: 5,
  },
  save_button_text: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  error_message: {
    fontSize: 14,
    color: "#F00",
    marginTop: 10,
  },
});

const UserInfo = () => {
  const { session } = useSession();
  if (!session) {
    Alert.alert("Lỗi", "Vui lòng đăng nhập");
    return <Redirect href="/" />;
  }
  const user = JSON.parse(session);

  const [userData, setUserData] = useState({
    username: "",
    bio: "",
  });
  const [originalData, setOriginalData] = useState({
    username: "",
    bio: "",
  });
  const [originalPassword, setOriginalPassword] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState(""); // Thêm trạng thái lỗi
  const [isErrorVisible, setIsErrorVisible] = useState(false); // Quản lý hiển thị thông báo lỗi

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await fetch(
          `${process.env.EXPO_PUBLIC_SERVER_URL}/user/get/id/${user.id}`
        );
        const data = await response.json();
        setUserData({
          username: data.user_name || "",
          bio: data.bio || "",
        });
        setOriginalData({
          username: data.user_name || "",
          bio: data.bio || "",
        });
        setOriginalPassword(data.password || "");
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }

    fetchUserData();
  }, []);

  const backButtonEvent = () => {
    router.back();
  };

  const validatePasswordAndUpdate = async () => {
    setError(""); // Reset lỗi mỗi khi nhấn "Lưu thông tin"
    setIsErrorVisible(true); // Hiển thị dòng chữ đỏ khi nhấn Lưu thông tin

    if (!userData.username || !currentPassword) {
      setError("Vui lòng nhập đầy đủ thông tin");
      return;
    }

    if (currentPassword !== originalPassword) {
      setError("Mật khẩu không đúng. Vui lòng nhập lại mật khẩu chính xác.");
      return;
    }

    await updateUserData();
  };

  const updateUserData = async () => {
    try {
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/user/update-profile/id/${user.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userData.username,
            bio: userData.bio,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update user data");
      }

      const result = await response.json();
      Alert.alert(
        "Thành công",
        "Dữ liệu người dùng đã được cập nhật thành công"
      );

      // Sau khi cập nhật thành công, làm mới dữ liệu
      setOriginalData({ username: userData.username, bio: userData.bio });
      setIsEditing(false);
      setIsErrorVisible(false); // Ẩn dòng chữ đỏ sau khi lưu
    } catch (error) {
      console.error("Error updating user data:", error);
      Alert.alert("Lỗi", "Không thể cập nhật thông tin người dùng");
    }
  };

  const editButtonOnPressed = () => {
    setIsEditing(true);
    setIsErrorVisible(false); // Ẩn lỗi khi bắt đầu chỉnh sửa
  };

  return (
    <View style={styles.container}>
      <Button
        onPress={backButtonEvent}
        buttonStyle={styles.backBtn}
        textStyle={styles.backBtnText}
      >
        Quay lại
      </Button>
      <View style={styles.header}>
        <Text style={styles.user_info_text}>Tên hiện tại</Text>
        <Text style={styles.user_info_text2}>
          {originalData.username || "N/A"}
        </Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.user_info_text}>Tên mới</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.input_text}
          value={userData.username}
          onChangeText={(text) =>
            setUserData((prev) => ({ ...prev, username: text }))
          }
          editable={isEditing}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.user_info_text}>Bio hiện tại</Text>
        <Text style={styles.user_info_text2}>{originalData.bio || "N/A"}</Text>
      </View>
      <View style={styles.header}>
        <Text style={styles.user_info_text}>Bio mới</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.input_text}
          value={userData.bio}
          onChangeText={(text) =>
            setUserData((prev) => ({ ...prev, bio: text }))
          }
          editable={isEditing}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.user_info_text}>Mật khẩu hiện tại</Text>
      </View>
      <View style={styles.input}>
        <TextInput
          style={styles.input_text}
          secureTextEntry
          value={currentPassword}
          onChangeText={(text) => setCurrentPassword(text)}
          editable={isEditing}
        />
      </View>

      {/* Hiển thị lỗi khi nhấn "Chỉnh sửa" và có lỗi */}
      {isErrorVisible && error && (
        <Text style={styles.error_message}>{error}</Text>
      )}

      <View>
        {isEditing ? (
          <Button
            buttonStyle={styles.save_button}
            textStyle={styles.save_button_text}
            onPress={validatePasswordAndUpdate}
          >
            Lưu thông tin
          </Button>
        ) : (
          <Button
            buttonStyle={styles.save_button}
            textStyle={styles.save_button_text}
            onPress={editButtonOnPressed}
          >
            Chỉnh sửa
          </Button>
        )}
      </View>
    </View>
  );
};

export default UserInfo;
