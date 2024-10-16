import { Text, View, StyleSheet } from "react-native";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { universalStyles } from "../assets/styles/styles";
import { Link, Redirect } from "expo-router";

const Register = () => {
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

  return (
    <>
      <View style={styles.center}>
        <View style={universalStyles.box}>
          <Text style={styles.text}>Log in</Text>
          <InputGroup
            textContentType="username"
            label="UserName"
            placeholder="Enter Your UserName"
          />
          <InputGroup
            textContentType="password"
            label="Password"
            placeholder="Enter Your Pasword"
          />
          <Button
            buttonStyle={styles.submitButton}
            textStyle={styles.submitText}
          >
            Log in
          </Button>
          <Text style={styles.submitText}>
            Need an account?{" "}
            <Link style={universalStyles.anchor} href={"/login"}>
              Log in
            </Link>
          </Text>
        </View>
      </View>
    </>
  );
};

export default Register;
