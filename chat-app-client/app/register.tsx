import { Text, View, StyleSheet } from "react-native";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";
import { universalStyles } from "../assets/styles/styles";
import { Link, Redirect, router } from "expo-router";

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
    backBtn: {
      marginLeft: 6,
      padding: 10,
      marginTop: 30,
    },
    backBtnText: {
      color: "white",
    }
  });

  const backButtonEvent = () => {
    console.log("back btn pressed");
    router.navigate(`/login`)
  }

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
          />
          <InputGroup
            textContentType="password"
            label="Password"
            placeholder=""
          />
          <Button
            buttonStyle={styles.submitButton}
            textStyle={styles.submitText}
          >
            Register
          </Button>
          <Text style={styles.submitText}>
            Already have account?{" "}
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
