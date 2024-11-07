import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import { Button } from "../components/Button";
import { router } from "expo-router";

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
    }
})

const backButtonEvent = () => {
    router.back();
}

const saveButtonOnPressed = () => {
    console.log("Update account information");
    Alert.alert(
    'Lưu thông tin?',
    '',
    [
      {
        text: "Yes",
        onPress: () => {
          console.log("update account information succeed");
          Alert.alert("Đã lưu thông tin thành công", "");
          router.back();
        },
      },
      {
        text: "No",
        onPress: () => {
          console.log("update account information cancelled");
          return;
        }
      }
    ],
    {
      cancelable: true,
    }
  )
}

const userInfo = () => {
    return (
        <View style={styles.container}>
            <Button
                onPress={backButtonEvent}
                buttonStyle={styles.backBtn}
                textStyle={styles.backBtnText}
            >
            Go back
            </Button>
            <View style={styles.header}>
                <Text style={styles.header_text}>Thay đổi thông tin người dùng</Text>
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Username</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input_text}></TextInput>
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Email</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input_text}></TextInput>
            </View>
            <View style={styles.header}>
                <Text style={styles.user_info_text}>Mật khẩu</Text>
            </View>
            <View style={styles.input}>
                <TextInput style={styles.input_text}></TextInput>
            </View>
            <View>
                <Button buttonStyle={styles.save_button} textStyle={styles.save_button_text} onPress={saveButtonOnPressed}>Lưu thông tin</Button>
            </View>
        </View>
    );
}

export default userInfo;