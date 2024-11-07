import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { universalStyles } from "../assets/styles/styles";
import { Link, router } from "expo-router";
import { validateEmail } from "../utility/checkValidate";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleRegister = async () => {
    console.log("register call");
    // Thông tin không được để trống
    if (!userName || !email || !password || !repassword) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    // Kiểm tra email hợp lệ
    if (!validateEmail(email)) {
      Alert.alert("Error", "Please enter a valid email address.");
      return;
    }

    // Kiểm tra độ dài mật khẩu tối thiểu 8 kí tự
    if (password.length < 8) {
      Alert.alert("Error", "Password must be at least 8 characters long.");
      return;
    }

    // Kiểm tra mật khẩu
    if (password !== repassword) {
      Alert.alert("Error", "Passwords do not match.");
      return;
    }

    try {
      // Kiểm tra xem email đã tồn tại chưa
      const emailCheckResponse = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/user/check-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const emailCheckData = await emailCheckResponse.json();

      if (!emailCheckResponse.ok) {
        Alert.alert("Error", emailCheckData.error || "Email check failed");
        console.error(emailCheckData.error);
        return;
      }

      // Nếu email đã tồn tại, hiển thị thông báo lỗi
      if (!emailCheckData.success) {
        Alert.alert("Error", "Email already exists.");
        console.log("Email already exists.");
        return;
      }

      // Thêm người dùng mới
      const response = await fetch(
        `${process.env.EXPO_PUBLIC_SERVER_URL}/user/insert`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: userName, // Sử dụng name thay vì userName
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        Alert.alert("Success", "User registered successfully!");
        router.navigate(`/login`);
      } else {
        Alert.alert("Error", data.error || "Registration failed");
      }
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : String(error)
      );
    }
  };

  const styles = StyleSheet.create({
    text: {
      color: "white",
      fontWeight: "bold",
      marginBottom: "10%",
      fontSize: 26,
    },
    center: {
      display: "flex",
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    submitButton: {
      marginVertical: "2%",
      paddingVertical: "3.5%",
      paddingHorizontal: "20%",
      marginTop: "5%",
      backgroundColor: "#5865F2",
      borderRadius: 5,
    },
    submitText: {
      color: "white",
      fontSize: 20,
    },
    backBtn: {
      marginLeft: 6,
      padding: 10,
      marginTop: 30,
    },
    backBtnText: {
      color: "white",
    },
  });

  const backButtonEvent = () => {
    console.log("back btn pressed");
    router.navigate(`/login`);
  };

  return (
    <>
      <View>
        <Button
          onPress={backButtonEvent}
          buttonStyle={styles.backBtn}
          textStyle={styles.backBtnText}
        >
          Go back
        </Button>
      </View>
      <View style={styles.center}>
        <View style={universalStyles.box}>
          <Text style={styles.text}>Register</Text>
          <InputGroup
            textContentType="username"
            label="Username"
            placeholder=""
            onChangeText={setUserName}
          />
          <InputGroup
            textContentType="emailAddress"
            label="Email"
            placeholder=""
            onChangeText={setEmail}
          />
          <InputGroup
            textContentType="password"
            label="Password"
            placeholder=""
            secureTextEntry
            onChangeText={setPassword}
          />
          <InputGroup
            textContentType="password" // Thay đổi thành password
            label="Confirm Password"
            placeholder=""
            secureTextEntry
            onChangeText={setRepassword}
          />
          <Button
            buttonStyle={styles.submitButton}
            textStyle={styles.submitText}
            onPress={handleRegister}
          >
            Register
          </Button>
          <Text style={styles.submitText}>
            Already have an account?{" "}
            <Link style={universalStyles.anchor} href={"/login"}>
              Login
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Register;
