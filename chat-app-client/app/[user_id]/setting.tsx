import { StyleSheet, View, Alert } from "react-native";
import { Button } from "../../components/Button";
import { router } from "expo-router";
import { useSession } from "../../components/Seesionprovider";
const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
  },
  blue: {
    color: "blue",
    fontSize: 20,
  },
  center: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "100%",
    marginTop: 50,
    padding: 10,
  },
  containerItem: {
    width: "100%",
    height: "8%",
    padding: 10,
    marginBottom: 5,
    color: "#ffffff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    borderColor: "#353A3F",
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "#353A3F",
  },
  itemText: {
    fontSize: 18,
    color: "#ffffff",
  },
});

// Tiến tới trang thay đổi thông tin cá nhân userInfo.tsx
const userInfoBtnOnPressed = () => {
  console.log("user info page");
  router.navigate("../userInfo");
};

// Tiến tới trang thay đổi mật khẩu changePassword.tsx
const changePasswordBtnOnPressed = () => {
  console.log("change password page");
  router.navigate("../passwordChange");
};

const setting = () => {
  const { signOut } = useSession();

  // Nút đăng xuất
  const logoutBtn = () => {
    console.log("User log out");
    Alert.alert(
      "Bạn có chắc là muốn đăng xuất?",
      "",
      [
        {
          text: "No",
          onPress: () => {
            console.log("logout confirm: no");
            return;
          },
        },
        {
          text: "Yes",
          onPress: () => {
            console.log("logout confirm: yes");
            signOut();
          },
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Button
          buttonStyle={styles.itemText}
          textStyle={styles.itemText}
          onPress={userInfoBtnOnPressed}
        >
          Thông tin cá nhân
        </Button>
      </View>
      <View style={styles.containerItem}>
        <Button
          buttonStyle={styles.itemText}
          textStyle={styles.itemText}
          onPress={changePasswordBtnOnPressed}
        >
          Đổi mật khẩu
        </Button>
      </View>
      <View style={styles.containerItem}>
        <Button
          buttonStyle={styles.itemText}
          textStyle={styles.itemText}
          onPress={logoutBtn}
        >
          Đăng xuất
        </Button>
      </View>
    </View>
  );
};

export default setting;
