import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "../components/Button";
import { router } from "expo-router";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        marginTop: 50,
        padding: 10,
        backgroundColor: "#1a1a1a",
    },
    header: {
        width: "100%",
        padding: 8,
    },
    header_text: {
        fontSize: 20,
        textAlign: "center",
        color: "#fff",
    },
    user_info_text: {
        fontSize: 14,
        color: "#fff",
    },
    input: {
        width: "100%",
        padding: 10,
        backgroundColor: "#333",
        borderRadius: 3,
        marginTop: 5,
    },
    input_text: {
        color: "#fff",
        fontSize: 14,
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
    }
});

const passwordChange = () => {
    const [newPassword, setNewPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");

    const handleBackButton = () => {
        router.back();
    };

    const handleSaveButton = async () => {
        if (!currentPassword || !newPassword || !repassword) {
            Alert.alert("Vui lòng nhập đầy đủ thông tin", "Mật khẩu không được để trống.");
            return;
        }
        
        if (newPassword !== repassword) {
            Alert.alert("Mật khẩu không trùng khớp", "");
            return;
        }

        try {
            const response = await fetch(`https://your-server-url.com/user/update-password/id/1`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    currentPassword,
                    newPassword,
                }),
            });

            const result = await response.json();

            if (response.ok) {
                Alert.alert("Đã lưu thông tin thành công", "");
                router.back();
            } else {
                Alert.alert("Lỗi cập nhật mật khẩu", result.error || "Cập nhật thất bại");
            }
        } catch (error) {
            console.error("Error updating password:", error);
            Alert.alert("Đã xảy ra lỗi khi cập nhật mật khẩu", "");
        }
    };

    return (
        <View style={styles.container}>
            <Button
                onPress={handleBackButton}
                buttonStyle={styles.backBtn}
                textStyle={styles.backBtnText}
            >
                Go back
            </Button>
            <View style={styles.header}>
                <Text style={styles.header_text}>Thay đổi mật khẩu</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Mật khẩu mới</Text>
            </View>
            <View style={styles.input}>
                <TextInput 
                    style={styles.input_text}
                    secureTextEntry={true}
                    placeholder="Nhập mật khẩu mới"
                    placeholderTextColor="#888"
                    value={newPassword}
                    onChangeText={setNewPassword}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Nhập lại mật khẩu mới</Text>
            </View>
            <View style={styles.input}>
                <TextInput 
                    style={styles.input_text}
                    secureTextEntry={true}
                    placeholder="Nhập lại mật khẩu mới"
                    placeholderTextColor="#888"
                    value={repassword}
                    onChangeText={setRepassword}
                />
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Nhập mật khẩu hiện tại</Text>
            </View>
            <View style={styles.input}>
                <TextInput 
                    style={styles.input_text}
                    secureTextEntry={true}
                    placeholder="Nhập mật khẩu hiện tại"
                    placeholderTextColor="#888"
                    value={currentPassword}
                    onChangeText={setCurrentPassword}
                />
            </View>
            <Button
                buttonStyle={styles.save_button}
                textStyle={styles.save_button_text}
                onPress={handleSaveButton}
            >
                Lưu thông tin
            </Button>
        </View>
    );
};

export default passwordChange;
