import {
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import { universalStyles } from "../assets/styles/styles";
import { InputGroup } from "../components/InputGroup";
import { Button } from "../components/Button";

const index = () => {
  const styles = StyleSheet.create({
    text: {
      color: "#00ffff",
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
      paddingVertical: "2%",
      paddingHorizontal: "20%",
      backgroundColor: "blue",
    },
    submitText: {
      color: "white",
    },
  });

  return (
    <>
      <View style={styles.center}>
        <View style={universalStyles.box}>
          <Text style={styles.text}>Sign in</Text>
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
            onPress={() => console.log("hi")}
            buttonStyle={styles.submitButton}
            textStyle={styles.submitText}
          >
            hi
          </Button>
        </View>
      </View>
    </>
  );
};

export default index;
