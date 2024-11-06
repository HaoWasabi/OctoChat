import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { universalStyles } from "../assets/styles/styles";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { useState } from "react";
import { Link, Redirect, router } from "expo-router";

const login = () => {
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
  });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const Submit = () => {
    console.log({ username: username, password: password });
    router.navigate(`/1/0`);
  };

  return (
    <>
      <View style={styles.center}>
        <View style={universalStyles.box}>
          <Text style={styles.text}>Login</Text>
          <InputGroup
            textContentType="emailAddress"
            label="Email"
            placeholder=""
            onChangeText={(e) => setUsername(e)}
            value={username}
          />
          <InputGroup
            textContentType="password"
            label="Password"
            placeholder=""
            onChangeText={(e) => setPassword(e)}
            value={password}
          />
          <Button
            onPress={Submit}
            buttonStyle={styles.submitButton}
            textStyle={styles.submitText}
          >
            Login
          </Button>
          <Text style={styles.submitText}>
            Need an account?{" "}
            <Link style={universalStyles.anchor} href="/register">
              Register
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
};

export default login;
